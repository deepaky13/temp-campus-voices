import "express-async-errors";
import Feed from "../models/FeedbackModels.js";
import Student from "../models/StudentUserModel.js";
import { StatusCodes } from "http-status-codes";

import mongoose from "mongoose";

import day from "dayjs";

export const getAllAdminFeedback = async (req, res) => {
  const { year, department, sort } = req.query;

  const queryObject = {};
  if (year && year !== "all") {
    queryObject.year = year;
  }
  if (department && department !== "all") {
    queryObject.department = department;
  }
  const sortOptions = {
    newest: "-createdAt",
    oldest: "created",
    "a-z": "-name",
    "z-a": "name",
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  //*--------------------pagination---------------
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const AllFeedbacks = await Feed.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  let totalFeedbacks = await Feed.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalFeedbacks / limit);

  res.status(200).json({
    totalFeedbacks,
    numOfPages,
    currentPage: page,
    AllFeedbacks,
  });
};
//*=====================

export const getAllFeedback = async (req, res) => {
  const Feeds = await Feed.find({ createdBy: req.user.userId });
  await res.status(StatusCodes.OK).json({ Feeds });
};

export const createFeedback = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req);
  const feed = await Feed.create(req.body);
  res.status(StatusCodes.CREATED).json({ feed });
};

export const getFeedback = async (req, res) => {
  const feed = await Feed.findById(req.params.id);
  res.status(StatusCodes.OK).json({ feed });
};

export const updateFeedback = async (req, res) => {
  const updatedFeed = await Feed.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "feedback modified...", updatedFeed });
};

export const deleteFeedback = async (req, res) => {
  const removedFeed = await Feed.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: "Feedback deleted...", FeedBack: removedFeed });
};
//*----------------------- Stats --------------------------
export const showStats = async (req, res) => {
  try {
    // let stats = await Feed.aggregate([
    //   {

    //   },
    // ]);
    // stats = stats.reduce((acc, curr) => {
    //   const { _id: title, count } = curr;
    //   acc[title] = count;
    //   return acc;
    // }, {});

    // const defaultStats = {
    //   year: stats.year || 0,
    //   department: stats.interview || 0,
    // };
    // console.log(defaultStats);
    //------------------------------------------------------
    const totalFeedbacks = await Feed.countDocuments();
    const totalUsers = await Student.countDocuments();
    let feedbackCountByYear = await Feed.aggregate([
      {
        $group: {
          _id: "$year",
          count: { $sum: 1 },
        },
      },
    ]);
    let feedbackCountByDepartment = await Feed.aggregate([
      {
        $group: { _id: "$department", count: { $sum: 1 } },
      },
    ]);
    // let order = await Feed.aggregate([
    //   {
    //     $sort: { accommodates: -1 },
    //   },
    //   {
    //     $project: {
    //       year: 1,
    //       accommodates: 1,
    //     },
    //   },
    //   {
    //     $limit: 15,
    //   },
    // ]);
    // const x = await Feed.find({});
    // console.log(x);
    res.status(StatusCodes.OK).json({
      totalFeedbacks,
      totalUsers,
      feedbackCountByYear,
      feedbackCountByDepartment,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};

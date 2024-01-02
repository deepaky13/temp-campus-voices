import { StatusCodes } from "http-status-codes";
import StudentModel from "../models/StudentUserModel.js";
import Feed from "../models/FeedbackModels.js";

export const getCurrentUser = async (req, res) => {
  const user = await StudentModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await StudentModel.countDocuments();
  const feedbacks = await Feed.countDocuments();

  // const AllFeedbacks = await Feed.find();

  const SelectedFeedback = await Feed.find({ year: req.query.year });

  res.status(StatusCodes.OK).json({ users, feedbacks, SelectedFeedback });

  //*---------------------------------------------------------
};

export const getUserRole = async (req, res) => {
  const { email: userEmail } = req.params;
  const user = await StudentModel.findOne({ email: userEmail });
  if (!user) {
    return res.status(404).json({ msg: `no user with email ${userEmail}` });
  }
  res.status(StatusCodes.OK).json({ user });
};

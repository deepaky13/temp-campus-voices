import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/CustomErrors.js";
// import { STUDENT_YEAR } from "../utils/constants.js";
import mongoose from "mongoose";
import Feed from "../models/FeedbackModels.js";
import StudentModel from "../models/StudentUserModel.js";

const WithValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("No feed back")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("Not Authorized")) {
          throw new UnauthorizedError("Not Authorized to access");
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// .isIn(Object.values(STUDENT_YEAR))
export const validateFeedback = WithValidationErrors([
  body("name").notEmpty().withMessage("Name is required"),
  body("year").notEmpty().withMessage("Invalid year "),
  body("department").notEmpty().withMessage("department is required"),
  body("comment")
    .notEmpty()
    .withMessage("comment is required min 5 characters")
    .isLength({ min: 5 }),
]);

export const validateIdParam = WithValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("Invalid MongoDB id ");
    const feed = await Feed.findById(value);

    if (!feed)
      throw new NotFoundError(`No feed back found with the id : ${value}`);

    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === feed.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("Not Authorized  to access the Account");
  }),
]);

export const validateRegisterInput = WithValidationErrors([
  body("name").notEmpty().withMessage("Name must required"),
  body("department").notEmpty().withMessage("Department must required"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("password  must be in min of 6 characters "),
  body("email")
    .notEmpty()
    .withMessage("Email must required")
    .isEmail()
    .withMessage("Invalid Email Formate")
    .custom(async (email) => {
      const student = await StudentModel.findOne({ email });
      if (student) {
        throw new BadRequestError("Email is already exits");
      }
    }),

  body("registerNo")
    .notEmpty()
    .isLength({ min: 12, max: 12 })
    .withMessage("Register number is  must be with 12 digits")
    .custom(async (registerNo) => {
      const student = await StudentModel.findOne({ registerNo });
      if (student) {
        throw new BadRequestError("Register Number is already exits");
      }
    }),
]);

export const validateLoginInput = WithValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email must required")
    .isEmail()
    .withMessage("Invalid Email Formate"),
  body("registerNo").notEmpty().withMessage("Register number must Required"),
  body("password").notEmpty().withMessage("password  must required "),
]);

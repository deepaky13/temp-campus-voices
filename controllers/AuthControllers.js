import { StatusCodes } from "http-status-codes";
import StudentModel from "../models/StudentUserModel.js";
import { UnauthenticatedError } from "../errors/CustomErrors.js";
import { createJWT } from "../utils/TokenUtils.js";
import {
  comparePassword,
  compareRegisterNo,
  hashPassword,
} from "../utils/PasswordUtils.js";

export const register = async (req, res) => {
  const AdminCheck = Number(req.body.registerNo);
  if (AdminCheck === 611621404000) {
    req.body.role = "admin";
  } else {
    req.body.role = "student";
  }

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const student = await StudentModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created..." });
};

export const login = async (req, res) => {
  const user = await StudentModel.findOne({ email: req.body.email });

  const IsValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!IsValidUser) throw new UnauthenticatedError("Invalid credentials");

  const isRegisterNoCorrect =
    user && (await compareRegisterNo(req.body.registerNo, user.registerNo));
  if (!isRegisterNoCorrect)
    throw new UnauthenticatedError("Invalid credentials");

  //* ------------------Tokens------------------

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

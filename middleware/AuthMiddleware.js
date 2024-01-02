import { verifyJWT } from "../utils/TokenUtils.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/CustomErrors.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication Invalid");

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("UnAuthorized to access");
    }
    next();
  };
};

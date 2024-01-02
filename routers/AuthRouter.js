import { Router } from "express";
const router = Router();
import { login, register, logout } from "../controllers/AuthControllers.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/ValidationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/logout", logout);

export default router;

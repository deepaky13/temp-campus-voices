import { Router } from "express";
import { authorizePermissions } from "../middleware/AuthMiddleware.js";
import {
  getApplicationStats,
  getCurrentUser,
  getUserRole,
} from "../controllers/UserControllrs.js";
import { getAllAdminFeedback } from "../controllers/FeedbackControllers.js";

const router = Router();

router.get("/current-user", getCurrentUser);
//---------------------------------------------------------------
router.get("/all-feedbacks", [
  authorizePermissions("admin"),
  getAllAdminFeedback,
]);
router.get(
  "/admin/app-stats",
  [authorizePermissions("admin")],
  getApplicationStats
);

export default router;

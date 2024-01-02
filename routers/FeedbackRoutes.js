import { Router } from "express";
const router = Router();

import {
  getAllFeedback,
  createFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
  showStats,
} from "../controllers/FeedbackControllers.js";

import {
  validateFeedback,
  validateIdParam,
} from "../middleware/ValidationMiddleware.js";

router.route("/").get(getAllFeedback).post(validateFeedback, createFeedback);

router.route("/stats").get(showStats);

router.route("/:id").get(validateIdParam, getFeedback).delete(deleteFeedback);
export default router;
// .patch(validateFeedback, validateIdParam, updateFeedback)

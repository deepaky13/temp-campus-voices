import mongoose from "mongoose";
import { DEP_STATUS, STUDENT_YEAR } from "../utils/constants.js";

const FeedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    year: {
      type: String,
      enum: Object.values(STUDENT_YEAR),
    },

    department: {
      type: String,
      enum: Object.values(DEP_STATUS),
    },
    comment: String,

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export default mongoose.model("Feed", FeedSchema);

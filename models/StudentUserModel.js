import mongoose from "mongoose";

const StudentUserModel = new mongoose.Schema({
  name: String,
  department: String,
  registerNo: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
});

StudentUserModel.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("StudentUser", StudentUserModel);

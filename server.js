import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// *-----------------Routers------------------
import FeedbackRouter from "./routers/FeedbackRoutes.js";
import AuthRouter from "./routers/AuthRouter.js";
import UserRouter from "./routers/UserRouter.js";
import { getUserRole } from "./controllers/UserControllrs.js";
//*-------------------MiddleWare-----------------
import errorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/AuthMiddleware.js";

//*-------------------------------

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello welcome to server page...");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

//*------------------/api/v1-----------------------
app.use("/api/v1/dashboard-student/feeds", authenticateUser, FeedbackRouter);
app.use("/api/v1/feeds", authenticateUser, FeedbackRouter);
app.use("/api/v1/user", authenticateUser, UserRouter);
app.use("/api/v1/users/dashboard-admin/:email", getUserRole);
app.use("api/v1/all-feedbacks", UserRouter);
app.use("/api/v1/auth", AuthRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

//* -------------------Error Handling------------------

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

try {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

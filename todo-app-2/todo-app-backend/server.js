import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserRouter, GroupRouter, TaskRouter } from "./api/routes/_index.js";

dotenv.config();

// Connect to db
await mongoose.connect(process.env.MONGODB_URL);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

// Express
const app = express();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("TODO-APP II");
});

app.use("/", UserRouter);
app.use("/", GroupRouter);
app.use("/", TaskRouter);

// Launch server
app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Se inició el servidor");
});

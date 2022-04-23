import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter, ListRouter, FavRouter } from "./api/routes/_index.js";

dotenv.config();

// Connect to db
await mongoose.connect(process.env.MONGODB_URL_AII);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

// Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Assesment II");
});

app.use("/", UserRouter);
app.use("/", ListRouter);
app.use("/", FavRouter);

// Launch server
app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Se inició el servidor");
});

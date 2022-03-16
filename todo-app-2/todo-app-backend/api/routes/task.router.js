import express from "express";

import { TaskController } from "../controllers/_index.js";
import { validateToken } from "../middlewares/_index.js";

const { update } = TaskController;

const router = express.Router();

const taskRouter = {
  UPDATE: "/task/update",
};

router.put(taskRouter.UPDATE, validateToken, update);

export default router;

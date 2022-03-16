import express from "express";

import { UserController } from "../controllers/_index.js";
import { validateToken } from "../middlewares/_index.js";

const {
  login,
  register,
  addTask,
  removeTask,
  get,
  getGroups,
  getTasks,
  restorePassword,
} = UserController;

const router = express.Router();

const userRoutes = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  ADD_TASK: "/user/addTask",
  REMOVE_TASK: "/user/removeTask",
  GET: "/user/get",
  GET_GROUPS: "/user/getGroups",
  GET_TASKS: "/user/getTasks",
  RESTORE_PASSWORD: "/user/restorePassword",
};

router.post(userRoutes.LOGIN, login);
router.post(userRoutes.REGISTER, register);
router.post(userRoutes.ADD_TASK, validateToken, addTask);
router.delete(userRoutes.REMOVE_TASK, validateToken, removeTask);
router.get(userRoutes.GET, validateToken, get);
router.get(userRoutes.GET_GROUPS, validateToken, getGroups);
router.get(userRoutes.GET_TASKS, validateToken, getTasks);
router.post(userRoutes.RESTORE_PASSWORD, restorePassword);

export default router;

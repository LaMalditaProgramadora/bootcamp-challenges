import express from "express";

import { UserController } from "../controllers/_index.js";

const { login, register, addTask, removeTask, get, getGroups, getTasks } =
  UserController;

const router = express.Router();

const userRoutes = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  ADD_TASK: "/user/addTask",
  REMOVE_TASK: "/user/removeTask",
  GET: "/user/get",
  GET_GROUPS: "/user/getGroups",
  GET_TASKS: "/user/getTasks",
};

router.post(userRoutes.LOGIN, login);
router.post(userRoutes.REGISTER, register);
router.post(userRoutes.ADD_TASK, addTask);
router.delete(userRoutes.REMOVE_TASK, removeTask);
router.get(userRoutes.GET, get);
router.get(userRoutes.GET_GROUPS, getGroups);
router.get(userRoutes.GET_TASKS, getTasks);

export default router;

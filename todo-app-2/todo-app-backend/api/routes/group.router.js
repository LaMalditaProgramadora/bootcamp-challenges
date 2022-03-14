import express from "express";

import { GroupController } from "../controllers/_index.js";

const { create, get, addTask, removeTask, addUser, removeUser } = GroupController;

const router = express.Router();

const groupRouter = {
  CREATE: "/group/create",
  GET: "/group/get",
  ADD_TASK: "/group/addTask",
  REMOVE_TASK: "/group/removeTask",
  ADD_USER: "/group/addUser",
  REMOVE_USER: "/group/removeUser",
};

router.post(groupRouter.CREATE, create);
router.get(groupRouter.GET, get);
router.post(groupRouter.ADD_TASK, addTask);
router.delete(groupRouter.REMOVE_TASK, removeTask);
router.post(groupRouter.ADD_USER, addUser);
router.delete(groupRouter.REMOVE_USER, removeUser);

export default router;

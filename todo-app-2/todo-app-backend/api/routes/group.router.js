import express from "express";
import { validateToken } from "../middlewares/_index.js";
import { GroupController } from "../controllers/_index.js";

const { create, get, addTask, removeTask, addUser, removeUser } =
  GroupController;

const router = express.Router();

const groupRouter = {
  CREATE: "/group/create",
  GET: "/group/get",
  ADD_TASK: "/group/addTask",
  REMOVE_TASK: "/group/removeTask",
  ADD_USER: "/group/addUser",
  REMOVE_USER: "/group/removeUser",
};

router.post(groupRouter.CREATE, validateToken, create);
router.get(groupRouter.GET, validateToken, get);
router.post(groupRouter.ADD_TASK, validateToken, addTask);
router.delete(groupRouter.REMOVE_TASK, validateToken, removeTask);
router.post(groupRouter.ADD_USER, validateToken, addUser);
router.delete(groupRouter.REMOVE_USER, validateToken, removeUser);

export default router;

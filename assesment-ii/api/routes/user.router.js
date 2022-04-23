import express from "express";

import { UserController } from "../controllers/_index.js";

const {
  loginUser,
  createUser
} = UserController;

const router = express.Router();

const userRoutes = {
  LOGIN_USER: "/auth/local/login",
  CREATE_USER: "/auth/local/register",
};

router.post(userRoutes.LOGIN_USER, loginUser);
router.post(userRoutes.CREATE_USER, createUser);

export default router;

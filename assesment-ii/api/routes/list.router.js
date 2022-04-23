import express from "express";
import { isAuthenticated } from "../middlewares/_index.js";
import { ListController } from "../controllers/_index.js";

const { createList, deleteList, listAllByIdUser, listByIdList } =
  ListController;

const router = express.Router();

const listRouter = {
  CREATE_LIST: "/api/favs",
  DELETE_LIST: "/api/favs/:id",
  LIST_ALL_BY_ID_USER: "/api/favs",
  LIST_BY_ID_LIST: "/api/favs/:id"
};

router.post(listRouter.CREATE_LIST, isAuthenticated, createList);
router.delete(listRouter.DELETE_LIST, isAuthenticated, deleteList);
router.get(listRouter.LIST_ALL_BY_ID_USER, isAuthenticated, listAllByIdUser);
router.get(listRouter.LIST_BY_ID_LIST, isAuthenticated, listByIdList);

export default router;

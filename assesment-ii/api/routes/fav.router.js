import express from "express";

import { FavController } from "../controllers/_index.js";
import { isAuthenticated } from "../middlewares/_index.js";

const { createFav, deleteFav, favListByIdFav } = FavController;

const router = express.Router();

const favRouter = {
  CREATE_FAV: "/api/favs/addFav",
  DELETE_FAV: "/api/favs/deleteFav/:id",
  LIST_BY_ID_FAV: "/api/favs/listById/:id"
};

router.post(favRouter.CREATE_FAV, isAuthenticated, createFav);
router.delete(favRouter.DELETE_FAV, isAuthenticated, deleteFav);
router.get(favRouter.LIST_BY_ID_FAV, isAuthenticated, favListByIdFav);

export default router;

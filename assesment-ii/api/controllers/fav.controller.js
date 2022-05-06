import FavModel from "../models/fav.model.js";
import { createResponse } from "../utils/response.js";

const { favSave, favDelete, favListById } = FavModel;

export const createFav = async (req, res) => {
  try {
    const saveFav = await favSave(req.body);
    res.json(createResponse(1, "Creación exitosa", saveFav));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const deleteFav = async (req, res) => {
  try {
    const deleteFav = await favDelete(req.params.id);
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const favListByIdFav = async (req, res) => {
  try {
    const fav = await favListById(req.params.id);
    if (fav) {
      res.json(createResponse(1, "Fav encontrado", fav));
    } else {
      res.json(createResponse(0, "El fav no existe", null));
    }
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

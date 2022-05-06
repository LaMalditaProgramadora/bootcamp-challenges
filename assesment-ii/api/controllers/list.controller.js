import { ListModel, FavModel } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

const { listSave, listDelete, listListByUserId, listListById } = ListModel;
const { favDeleteByListId } = FavModel;

export const createList = async (req, res) => {
  try {
    const list = await listSave(req.body);
    res.json(createResponse(1, "Creación exitosa", list));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteList = await listDelete(id);
    const deleteFavs = await favDeleteByListId(id);
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listAllByIdUser = async (req, res) => {
  try {
    const lists = await listListByUserId(req.query.id);
    if (lists && lists.length > 0) {
      res.json(createResponse(1, "Listas encontradas", lists));
    } else {
      res.json(createResponse(0, "No se encontraron listas", null));
    }
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listByIdList = async (req, res) => {
  try {
    const list = await listListById(req.params.id);
    if (list) {
      res.json(createResponse(1, "Lista encontrada", list));
    } else {
      res.json(createResponse(0, "La lista no existe", null));
    }
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

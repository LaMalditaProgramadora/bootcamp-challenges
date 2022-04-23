import { List, Fav } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const createList = async (req, res) => {
  try {
    const body = req.body;
    const list = new List(body);
    const listSave = await list.save();
    res.json(createResponse(1, "Creación exitosa", listSave));
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteList = await List.deleteOne({ _id: id });
    const deleteFavs = await Fav.deleteMany({ list: id });
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listAllByIdUser = async (req, res) => {
  try {
    const { id: id } = req.query;
    const lists = await List.find({ user: id });
    if (lists && lists.length > 0) {
      res.json(createResponse(1, "Listas encontradas", lists));
    } else {
      res.json(createResponse(0, "No se encontraron listas", null));
    }
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const listByIdList = async (req, res) => {
  try {
    const { id: id } = req.params;
    const list = await List.findById(id);
    if (list) {
      res.json(createResponse(1, "Lista encontrada", list));
    } else {
      res.json(createResponse(0, "La lista no existe", null));
    }
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

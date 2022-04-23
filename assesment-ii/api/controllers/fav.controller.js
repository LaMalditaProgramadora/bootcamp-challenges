import { Fav } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const createFav = async (req, res) => {
  try {
    const fav = new Fav(req.body);
    const saveFav = await fav.save();
    res.json(createResponse(1, "Creación exitosa", saveFav));
  } catch(e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const deleteFav = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteFav = await Fav.deleteOne({ _id: id });
    res.json(createResponse(1, "Eliminación exitosa", null));
  } catch {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const favListByIdFav = async (req, res) => {
  try {
    const { id: id } = req.params;
    const fav = await Fav.findById(id);
    if (fav) {
      res.json(createResponse(1, "Fav encontrado", fav));
    } else {
      res.json(createResponse(0, "El fav no existe", null));
    }
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};
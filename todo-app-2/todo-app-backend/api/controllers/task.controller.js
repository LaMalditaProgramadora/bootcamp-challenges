import { Task } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const update = async (req, res) => {
  try {
    const body = req.body;
    let task = await Task.findById(body._id);
    task.name = body.name;
    task.status = body.status;
    const saveTask = await task.save();
    res.json(createResponse("1", "Guardado exitoso", saveTask));
  } catch (e) {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

import { User, Task } from "../models/_index.js";
import { encryptPassword, comparePassword } from "../utils/encrypt.js";
import { createResponse } from "../utils/response.js";

export const login = async (req, res) => {
  const body = req.body;
  let user = await User.findOne({
    username: body.username,
  });
  if (!user) {
    res.json(createResponse(0, "Usuario incorrecto", null));
  } else {
    if (comparePassword(body.password, user.password)) {
      const userWithoutPassword = {
        _id: user._id,
        username: user.username,
        email: user.email,
        password: "******",
      };
      res.json(createResponse(1, "Login exitoso", userWithoutPassword));
    } else {
      res.json(createResponse(-1, "Contraseña incorrecta", null));
    }
  }
};

export const register = async (req, res) => {
  const body = req.body;
  body.password = encryptPassword(body.password);
  const userExist = await User.findOne({
    username: body.username,
  });
  if (userExist) {
    res.json(createResponse(0, "Usuario ya registrado", null));
  } else {
    const user = new User(body);
    const userSave = await user.save();
    const userWithoutPassword = {
      _id: userSave._id,
      username: userSave.username,
      email: userSave.email,
      password: "******",
    };
    res.json(createResponse(1, "Registro exitoso", userWithoutPassword));
  }
};

export const addTask = async (req, res) => {
  try {
    const { id: id } = req.query;
    const user = await User.findById(id);
    const task = new Task(req.body);
    const saveTask = await task.save();
    user.tasks.push(saveTask._id);
    const userSave = await user.save();
    res.json(createResponse("1", "Guardado exitoso", saveTask));
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

export const removeTask = async (req, res) => {
  try {
    const { idUser: idUser, idTask: idTask } = req.query;
    let user = await User.findById(idUser);
    const deleteTask = await Task.deleteOne({ _id: idTask });
    let newTasks = [];
    user.tasks.forEach((userTask) => {
      if( userTask.toString() !== idTask) newTasks.push(userTask);
    });
    user.tasks = newTasks;
    const userSave = await user.save();
    res.json(createResponse("1", "Eliminación exitosa", null));
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

export const get = async (req, res) => {
  const { id: id } = req.query;
  const user = await User.findById(id).populate("groups").populate("tasks");
  res.json(createResponse(1, "Usuario encontrado", user));
};

export const getGroups = async (req, res) => {
  const { id: id } = req.query;
  const user = await User.findById(id).populate("groups");
  res.json(createResponse(1, "Grupos encontrados", user.groups));
};

export const getTasks = async (req, res) => {
  const { id: id } = req.query;
  const user = await User.findById(id).populate("tasks");
  res.json(createResponse(1, "Tareas encontradas", user.tasks));
};

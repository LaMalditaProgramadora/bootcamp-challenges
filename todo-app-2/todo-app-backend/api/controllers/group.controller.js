import { Group, User, Task } from "../models/_index.js";
import { createResponse } from "../utils/response.js";

export const create = async (req, res) => {
  try {
    const body = req.body;
    const group = new Group(body);
    const groupSave = await group.save();
    const user = await User.findById(group.users[0]);
    user.groups.push(groupSave._id);
    const userSave = await user.save();
    res.json(createResponse(1, "Registro exitoso", groupSave));
  } catch {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const get = async (req, res) => {
  const { id: id } = req.query;
  const group = await Group.findById(id).populate("users").populate("tasks");
  res.json(createResponse(1, "Grupo encontrado", group));
};

export const addTask = async (req, res) => {
  try {
    const { id: id } = req.query;
    const group = await Group.findById(id);
    const task = new Task(req.body);
    const saveTask = await task.save();
    group.tasks.push(saveTask._id);
    const groupSave = await group.save();
    res.json(createResponse("1", "Guardado exitoso", saveTask));
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

export const removeTask = async (req, res) => {
  try {
    const { idGroup: idGroup, idTask: idTask } = req.query;
    let group = await Group.findById(idGroup);
    const deleteTask = await Task.deleteOne({ _id: idTask });
    let newTasks = [];
    group.tasks.forEach((groupTask) => {
      if (groupTask.toString() !== idTask) newTasks.push(groupTask);
    });
    group.tasks = newTasks;
    const groupSave = await group.save();
    res.json(createResponse("1", "Eliminación exitosa", null));
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

export const addUser = async (req, res) => {
  try {
    const { idGroup: idGroup, username: username } = req.query;
    let user = await User.findOne({ username: username });
    if (user === null) {
      res.json(createResponse("0", "Usuario no encontrado", null));
    } else {
      let registered = false;
      user.groups.forEach((g) => {
        if (g.toString() === idGroup) registered = true;
      });
      if (registered === true) {
        res.json(createResponse("0", "El usuario ya está en el grupo", null));
      } else {
        user.groups.push(idGroup);
        const userSave = await user.save();
        let group = await Group.findById(idGroup);
        group.users.push(user._id);
        const groupSave = await group.save();
        const userWithoutPassword = {
          _id: user._id,
          username: user.username,
          email: user.email,
        };
        res.json(createResponse("1", "Guardado exitoso", userWithoutPassword));
      }
    }
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

export const removeUser = async (req, res) => {
  try {
    const { idGroup: idGroup, idUser: idUser } = req.query;
    let group = await Group.findById(idGroup);
    let user = await User.findById(idUser);

    let newUsers = [];
    group.users.forEach((u) => {
      if (u.toString() !== idUser) newUsers.push(u);
    });
    group.users = newUsers;
    const groupSave = await group.save();

    let newGroups = [];
    user.groups.forEach((g) => {
      if (g.toString() !== idGroup) newGroups.push(g);
    });
    user.groups = newGroups;
    const userSave = await user.save();

    res.json(createResponse("1", "Eliminación exitosa", null));
  } catch {
    res.json(createResponse("-1", "Error en el servidor", null));
  }
};

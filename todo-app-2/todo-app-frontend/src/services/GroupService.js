import httpClient from "../utils/httpClient";

export const create = async (group) => {
  const data = await httpClient.post("/group/create", group).then((v) => {
    return v.data;
  });
  return data;
};

export const addTaskGroup = async (idGroup, task) => {
  const data = await httpClient
    .post(`/group/addTask?id=${idGroup}`, task)
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeTaskGroup = async (idGroup, idTask) => {
  const data = await httpClient
    .delete(`/group/removeTask?idGroup=${idGroup}&idTask=${idTask}`)
    .then((v) => {
      return v.data;
    });
  return data;
};

export const get = async (id) => {
  const data = await httpClient.get(`/group/get?id=${id}`).then((v) => v.data);
  return data;
};

export const addUser = async (idGroup, username) => {
  const data = await httpClient
    .post(`/group/addUser?idGroup=${idGroup}&username=${username}`, {})
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeUser = async (idGroup, idUser) => {
  const data = await httpClient
    .delete(`/group/removeUser?idGroup=${idGroup}&idUser=${idUser}`)
    .then((v) => {
      return v.data;
    });
  return data;
};

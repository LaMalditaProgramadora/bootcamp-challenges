import httpClient from "../utils/httpClient";

export const login = async (login) => {
  const data = await httpClient.post("/user/login", login).then((v) => {
    return v.data;
  });
  return data;
};

export const register = async (user) => {
  const data = await httpClient.post("/user/register", user).then((v) => {
    return v.data;
  });
  return data;
};

export const addTask = async (idUser, task) => {
  const data = await httpClient
    .post(`/user/addTask?id=${idUser}`, task)
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeTask = async (idUser, idTask) => {
  const data = await httpClient
    .delete(`/user/removeTask?idUser=${idUser}&idTask=${idTask}`)
    .then((v) => {
      return v.data;
    });
  return data;
};

export const get = async (id) => {
  const data = await httpClient.get(`/user/get?id=${id}`).then((v) => v.data);
  return data;
};

export const getGroups = async (id) => {
  const data = await httpClient
    .get(`/user/getGroups?id=${id}`)
    .then((v) => v.data);
  return data;
};

export const getTasks = async (id) => {
  const data = await httpClient
    .get(`/user/getTasks?id=${id}`)
    .then((v) => v.data);
  return data;
};

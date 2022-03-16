import httpClient from "../utils/httpClient";
import { getToken } from "../services/StorageService";

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

export const restorePassword = async (email) => {
  const data = await httpClient
    .post(`/user/restorePassword?email=${email}`, {})
    .then((v) => {
      return v.data;
    });
  return data;
};

export const addTaskUser = async (idUser, task) => {
  const data = await httpClient
    .post(`/user/addTask?id=${idUser}`, task, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeTaskUser = async (idUser, idTask) => {
  const data = await httpClient
    .delete(`/user/removeTask?idUser=${idUser}&idTask=${idTask}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

export const get = async (id) => {
  const data = await httpClient
    .get(`/user/get?id=${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => v.data);
  return data;
};

export const getGroups = async (id) => {
  const data = await httpClient
    .get(`/user/getGroups?id=${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => v.data);
  return data;
};

export const getTasks = async (id) => {
  const data = await httpClient
    .get(`/user/getTasks?id=${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => v.data);
  return data;
};

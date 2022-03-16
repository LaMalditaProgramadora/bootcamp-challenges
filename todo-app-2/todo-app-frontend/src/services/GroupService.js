import httpClient from "../utils/httpClient";
import { getToken } from "../services/StorageService";

export const create = async (group) => {
  const data = await httpClient
    .post("/group/create", group, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

export const addTaskGroup = async (idGroup, task) => {
  const data = await httpClient
    .post(`/group/addTask?id=${idGroup}`, task, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeTaskGroup = async (idGroup, idTask) => {
  const data = await httpClient
    .delete(`/group/removeTask?idGroup=${idGroup}&idTask=${idTask}`, {
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
    .get(`/group/get?id=${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => v.data);
  return data;
};

export const addUser = async (idGroup, username) => {
  const data = await httpClient
    .post(
      `/group/addUser?idGroup=${idGroup}&username=${username}`,
      {},
      {
        headers: {
          Authorization: getToken(),
        },
      }
    )
    .then((v) => {
      return v.data;
    });
  return data;
};

export const removeUser = async (idGroup, idUser) => {
  const data = await httpClient
    .delete(`/group/removeUser?idGroup=${idGroup}&idUser=${idUser}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

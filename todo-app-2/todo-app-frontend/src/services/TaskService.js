import httpClient from "../utils/httpClient";
import { getToken } from "../services/StorageService";

export const update = async (task) => {
  const data = await httpClient
    .put("/task/update", task, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((v) => {
      return v.data;
    });
  return data;
};

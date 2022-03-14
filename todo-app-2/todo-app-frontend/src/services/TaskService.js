import httpClient from "../utils/httpClient";

export const update = async (task) => {
  const data = await httpClient.put("/task/update", task).then((v) => {
    return v.data;
  });
  return data;
};

export const setAll = (idUser, username, token) => {
  localStorage.setItem("idUser", idUser);
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const getIdUser = () => {
  return localStorage.getItem("idUser");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeAll = () => {
  localStorage.removeItem("idUser");
  localStorage.removeItem("username");
  localStorage.removeItem("token");
};

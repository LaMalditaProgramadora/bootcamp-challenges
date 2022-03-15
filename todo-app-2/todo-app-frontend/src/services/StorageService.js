export const setAll = (idUser, username) => {
  localStorage.setItem("idUser", idUser);
  localStorage.setItem("username", username);
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const getIdUser = () => {
  return localStorage.getItem("idUser");
};

export const removeAll = () => {
  localStorage.removeItem("idUser");
  localStorage.removeItem("username");
};

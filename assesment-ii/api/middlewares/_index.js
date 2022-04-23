import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : "";

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
      if (!err) next();
      else {
        res
          .status(403)
          .send({ status: -1, message: "Error al verificar token" });
      }
    });
  } else {
    res.status(403).send({ status: -1, message: "Autenticación requerida" });
  }
};

import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/_index.js";
import { comparePassword, encryptPassword } from "../utils/encrypt.js";
import { createResponse } from "../utils/response.js";

dotenv.config();

export const loginUser = async (req, res) => {
  try {
    const body = req.body;
    let user = await User.findOne({
      email: body.email,
    });
    if (!user) {
      res.json(createResponse(0, "Usuario incorrecto", null));
      return;
    }
    if (!comparePassword(body.password, user.password)) {
      res.json(createResponse(-1, "Contraseña incorrecta", null));
      return;
    }
    jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 36000, _id: user._id },
      process.env.SECRET_KEY,
      (error, token) => {
        if (!error) {
          user.password = "****";
          res.json(
            createResponse(1, "Login exitoso", {
              token: token,
              user: user,
            })
          );
        } else {
          console.log(error);
          res.json(createResponse(0, "Error al crear token", null));
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const createUser = async (req, res) => {
  const body = req.body;
  body.password = encryptPassword(body.password);
  const userExist = await User.findOne({
    email: body.email,
  });
  if (userExist) {
    res.json(createResponse(0, "Usuario ya registrado", null));
    return;
  }
  const user = new User(body);
  const userSave = await user.save();
  res.json(createResponse(1, "Creación exitosa", null));
};

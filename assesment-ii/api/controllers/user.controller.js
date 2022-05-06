import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/_index.js";

import { createResponse } from "../utils/response.js";

dotenv.config();

const { userExist, userValidateLogin, userSave } = UserModel;

export const loginUser = async (req, res) => {
  try {
    const body = req.body;
    let result = await userValidateLogin(body);
    if (result.message !== "") {
      res.json(createResponse(0, result.message, null));
      return;
    }

    const token = jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 36000, _id: result.user._id },
      process.env.SECRET_KEY
    );
    result.user.password = "******";
    res.json(
      createResponse(1, "Login exitoso", {
        token: token,
        user: result.user,
      })
    );
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await userExist(body.email);
    if (user) {
      res.json(createResponse(0, "Usuario ya registrado", null));
      return;
    }
    const save = await userSave(body);
    res.json(createResponse(1, "Creación exitosa", null));
  } catch (e) {
    res.json(createResponse(-1, "Error en el servidor", null));
  }
};

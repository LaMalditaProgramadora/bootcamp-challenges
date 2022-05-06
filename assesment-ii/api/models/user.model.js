import mongoose from "mongoose";
import { comparePassword, encryptPassword } from "../utils/encrypt.js";

const schemaUser = {
  password: String,
  email: String,
};

const User = mongoose.model("User", schemaUser, "users");

const userValidateLogin = async (body) => {
  let result = { message: "", user: null };
  let user = await User.findOne({
    email: body.email,
  });
  result.user = user;
  if (!user) {
    result.message = "Usuario incorrecto";
  } else if (!comparePassword(body.password, user.password)) {
    result.message = "Contraseña incorrecta";
  }
  return result;
};

const userExist = async (email) => {
  const user = await User.findOne({
    email: email,
  });
  return user;
};

const userSave = async (body) => {
  body.password = encryptPassword(body.password);
  const user = new User(body);
  const userSave = await user.save();
};

const UserModel = {
  userValidateLogin: userValidateLogin,
  userExist: userExist,
  userSave: userSave,
};

export default UserModel;

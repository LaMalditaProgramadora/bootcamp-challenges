import bcrypt from "bcrypt";

const salt = 10;

export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
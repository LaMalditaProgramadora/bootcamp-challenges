import mongoose from "mongoose";

const schemaUser = {
  password: String,
  email: String,
};

const User = mongoose.model("User", schemaUser, "users");

export default User;

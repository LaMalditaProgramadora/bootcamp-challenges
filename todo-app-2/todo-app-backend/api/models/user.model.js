import mongoose from "mongoose";

const schemaUser = {
  password: String,
  username: String,
  email: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
};

const User = mongoose.model("User", schemaUser, "users");

export default User;

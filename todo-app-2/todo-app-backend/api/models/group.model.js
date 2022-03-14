import mongoose from "mongoose";

const schemaGroup = {
  name: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

const Group = mongoose.model("Group", schemaGroup, "groups");

export default Group;

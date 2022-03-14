import mongoose from "mongoose";

const schemaTask = {
  name: String,
  status: String,
};

const Group = mongoose.model("Task", schemaTask, "tasks");

export default Group;

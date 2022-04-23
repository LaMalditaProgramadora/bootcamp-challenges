import mongoose from "mongoose";

const schemaList = {
  givenName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
};

const List = mongoose.model("List", schemaList, "lists");

export default List;

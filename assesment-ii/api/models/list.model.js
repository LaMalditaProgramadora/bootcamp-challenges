import mongoose from "mongoose";

const schemaList = {
  givenName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
};

const List = mongoose.model("List", schemaList, "lists");

const listSave = async (body) => {
  const list = new List(body);
  const listSave = await list.save();
  return listSave;
};

const listDelete = async (id) => {
  const deleteList = await List.deleteOne({ _id: id });
  return deleteList;
};

const listListByUserId = async (id) => {
  const lists = await List.find({ user: id });
  return lists;
};

const listListById = async (id) => {
  const list = await List.findById(id);
  return list;
};

const ListModel = {
  listSave: listSave,
  listDelete: listDelete,
  listListByUserId: listListByUserId,
  listListById: listListById,
};

export default ListModel;

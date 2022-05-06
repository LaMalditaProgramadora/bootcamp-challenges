import mongoose from "mongoose";

const schemaFav = {
  title: String,
  description: String,
  link: String,
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
};

const Fav = mongoose.model("Fav", schemaFav, "favs");

const favSave = async (body) => {
  const fav = new Fav(body);
  const saveFav = await fav.save();
  return saveFav;
};

const favDelete = async (id) => {
  const deleteFav = await Fav.deleteOne({ _id: id });
  return deleteFav;
};

const favDeleteByListId = async (id) => {
  const deleteFavs = await Fav.deleteMany({ list: id });
  return deleteFavs;
};

const favListById = async (id) => {
  const fav = await Fav.findById(id);
  return fav;
};

const FavModel = {
  favSave: favSave,
  favDelete: favDelete,
  favListById: favListById,
  favDeleteByListId: favDeleteByListId,
};

export default FavModel;

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

export default Fav;

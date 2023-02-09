const { Schema, model } = require("mongoose");

const MemesSchema = Schema({
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  user_id: {
    type: String,
  },
  category:{
    type:String
  },
  image: {
    public_id:String,
    url:String
  },
  ownership:{ type: Schema.Types.ObjectId, ref: "users" }
});

const MemesModel = model("memes", MemesSchema);

module.exports = MemesModel;

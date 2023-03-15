const memesModel = require("../models/memes.model");
const { uploadImage } = require("../utils/cloudinary");

const getAllMemes = async (req, res, next) => {
  try {
    const allMemes = await memesModel.find({});

    res.status(200).send({ status: true, data: allMemes });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const getMemeByID = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const meme = await memesModel.findById(id).lean().exec();

    res.status(200).send({ status: true, data: meme });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const createMeme = async (req, res, next) => {
  const { _id } = req.params;
  console.log(_id);
  //try {
  let urlUpload = "";
  const { title, category, url } = JSON.parse(req.body.object);
  console.log(JSON.parse(req.body.object));
  if (url !== "") {
    urlUpload = url;

    console.log("url", url);
  } else {
    urlUpload = req.files[0].path;

  
  }
  const result = await uploadImage(urlUpload);



  const meme = await memesModel.create({
    title,
    category,
    url: result.url,
    public_id: result.public_id,
    ownership: _id,
  });

  res.status(200).send({ status: true, data: meme });
};



const searchMemes = async (req, res, next) => {
  const { title } = req.query;
  console.log(title);
  try {
    const memes = await memesModel
      .find({ $or: [{ title: title }, { category: title }] })
      .lean()
      .exec();
    //const memes = await memesModel.find({ title: title }).lean().exec(); $or:[{ciudad:/^M/},{ciudad:/^Z/}]
    console.log(memes);
    res.status(200).send({ status: true, data: memes });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { getAllMemes, createMeme, searchMemes, getMemeByID };

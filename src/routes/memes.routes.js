const memesRouter = require('express').Router()
const memesController = require('../controllers/memes.controller')
const multer=require("multer")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
  
const Data = multer({ storage: storage });



memesRouter
    .get('/', memesController.getAllMemes)
    .get('/search/', memesController.searchMemes)
    .get('/:id/', memesController.getMemeByID)
    .post('/post/:id',  Data.any("files"),memesController.createMeme)


module.exports = memesRouter
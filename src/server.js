const express = require("express");
const multer=require("multer")
const morgan = require("morgan");
const helmet = require("helmet");
const { json } = require("body-parser");
const cors = require("cors");
const memesRouter = require("./routes/memes.routes");
const fileUpload=require('express-fileupload')
const usersRouter=require("./routes/users.routes")
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use("/memes", memesRouter);
app.use("/users", usersRouter);
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:'./uploads'
}))

module.exports = app;

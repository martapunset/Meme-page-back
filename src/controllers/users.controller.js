const { create } = require("../models/users.model");
const usersModel = require("../models/users.model");


const loginUser = async (req, res, next) => {
    const { email } = req.body;
    console.log(req.body)
    try {
        const userDBexists = await usersModel.findOne({ email:email }).lean().exec();
        
      if (userDBexists) {
        res.status(200).send({ status: true, data: userDBexists });
      } else {
        const userDB = await usersModel.create(req.body);
        res.status(201).send({ status: true, data: userDB });
      }
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
};
module.exports = { loginUser };
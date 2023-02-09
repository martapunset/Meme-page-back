const { Schema, model } = require("mongoose");
//const validator = require("validator");

const UsersSchema = Schema({

  firstName: {
    type: String,
    required: [true, "the firstname is required"],
  },

  lastName: {
    type: String,
    required: [true, "the lastname is required"],
  },

  userName: {
    type: String,
    unique:false,
  },

  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
      unique: true
      /*,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
    */
  },

  picture: {
    type: String,
  }
  

  
});

const UsersModel = model("users", UsersSchema);

module.exports = UsersModel;

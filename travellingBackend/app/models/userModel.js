const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  userType:{
    type: String,
    required: true
  }
},{timeStamps:true});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

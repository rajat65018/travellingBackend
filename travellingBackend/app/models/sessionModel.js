const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    userType:{
      type:String,
      required:true
    }
  },
  { timeStamps: true }
);

const sessionModel = mongoose.model("session", sessionSchema);

module.exports = sessionModel;

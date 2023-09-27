const mongoose = require("mongoose");

const {  MONGODB_URL } = require("../../config");

async function dbConnect() {
  await mongoose.connect(MONGODB_URL);
  console.log("database connected successfully");
}

module.exports = dbConnect;

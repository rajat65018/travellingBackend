const userModel = require("../models/userModel");

const userServices = {};

userServices.createUser = async (payload) => {
  return await userModel(payload).save();
};

userServices.findOneUser = async (searchQuery, projectionQuery) => {
  return await userModel.findOne(searchQuery, projectionQuery);
};

userServices.findOneAndUpdateUser = async (searchQuery, updateQuery) => {
  return await userModel.findOneAndUpdate(searchQuery, updateQuery);
};

userServices.findOneAndDeleteUser = async (searchQuery) => {
  return await userModel.findOneAndDelete(searchQuery);
};

module.exports = userServices;

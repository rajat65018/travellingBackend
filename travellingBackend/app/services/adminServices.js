const adminModel = require("../models/adminModel");

const adminServices = {};

adminServices.createAdmin = async (payload) => {
  return await adminModel(payload).save();
};

adminServices.findOneAdmin = async (searchQuery, projectionQuery) => {
  return await adminModel.findOne(searchQuery, projectionQuery);
};

adminServices.findOneAndUpdateAdmin = async (searchQuery, updateQuery) => {
  return await adminModel.findOneAndUpdate(searchQuery, updateQuery);
};

module.exports = adminServices;

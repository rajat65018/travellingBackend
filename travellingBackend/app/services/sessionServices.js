const sessionModel = require("../models/sessionModel");

const sessionServices = {};

sessionServices.createSession = async (session) => {
  return await sessionModel(session).save();
};

sessionServices.findOneSession = async (searchQuery, projectionQuery) => {
  return await sessionModel.findOne(searchQuery, projectionQuery);
};

sessionServices.findOneAndDeleteSession = async (searchQuery) => {
  return await sessionModel.findOneAndDelete(searchQuery);
};

sessionServices.findOneAndUpdateSession = async (searchQuery, updateQuery) => {
  return await sessionModel.findOneAndUpdate(searchQuery, updateQuery);
};

module.exports = sessionServices;

const busModel = require("../models/busModel");

const busServices = {};

busServices.createBus = async (payload) => {
  return await busModel(payload).save();
};

busServices.findOneBus = async (searchQuery, projectionQuery) => {
  return await busModel.findOne(searchQuery, projectionQuery);
};

busServices.findBuses = async (searchQuery, projectionQuery) => {
  return await busModel.findBuses(searchQuery, projectionQuery);
};

busServices.findOneAndUpdateBus=async(searchQuery,updateQuery)=>{
    return await busModel.findOneAndUpdate(searchQuery,updateQuery);
}

module.exports = busServices;

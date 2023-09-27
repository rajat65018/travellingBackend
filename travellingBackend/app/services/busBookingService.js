const ticketBookingModel = require("../models/busBookingModel");

const busTicketBookingService = {};

busTicketBookingService.createTicket = async (payload) => {
  return await ticketBookingModel(payload).save();
};

busTicketBookingService.findOneTicket = async (
  searchQuery,
  projectionQuery
) => {
  return await ticketBookingModel.findOne(searchQuery, projectionQuery);
};

busTicketBookingService.findOneAndUpdateTicket = async (
  searchQuery,
  updateQuery
) => {
  return await ticketBookingModel.findOneAndUpdate(searchQuery, updateQuery);
};

module.exports = busTicketBookingService;

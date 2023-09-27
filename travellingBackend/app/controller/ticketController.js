const { createTicket } = require("../services/busBookingService");
const { findOneAndUpdateBus } = require("../services/busServices");

const ticketController = {};
ticketController.bookTicket = async (req, res) => {
  const userId = req.body.userId;
  const ticketInfo = req.body;
  const ticketObj = {
    busNo: ticketInfo.busNo,
    userId: userId,
    totalTicket: ticketInfo.totalTicket,
    bookingStatus: "booked",
    passengerDetail: ticketInfo.passengerDetail,
  };
  const bookTicket = await createTicket(ticketObj);
  if (bookTicket) {
    await findOneAndUpdateBus(
      { busNo: ticketInfo.busNo },
      { $set: { $inc: { totalTicket: -ticketInfo.totalTicket } } }
    );
    return res.status(200).json(bookTicket);
  }
};

module.exports = ticketController;

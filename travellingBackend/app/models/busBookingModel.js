const mongoose = require("mongoose");
const ticketBookingSchema = mongoose.Schema({
  busNo: {
    type: Number,
    ref: "buses",
    require: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    requried: true,
  },
  totalTicket: {
    type: Number,
    required: true,
  },
  bookingStatus:{
    type:string,
    requried:true
  },
  passenger: [
    {
      name: { type: String, requried: true },
      age: { type: String, required: true },
    },
  ],
});

const ticketBookingModel=mongoose.model('busTicketBooking',ticketBookingSchema);

module.exports=ticketBookingModel;

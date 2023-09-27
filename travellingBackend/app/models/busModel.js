const mongoose = require("mongoose");
const busSchema = mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
    },
    starting: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    seatLeft: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
    fare: {
      type: Number,
      required: String,
    },
    boarding: [{ type: String }],
  },
  { timeStamps: true }
);

const busModel = mongoose.model("bus", busSchema);

module.exports = busModel;

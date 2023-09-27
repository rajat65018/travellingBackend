const { generateToken } = require("../helper/commonfunction");
const { findOneAdmin, createAdmin } = require("../services/adminServices");
const { findOneBus, createBus } = require("../services/busServices");
const {
  createSession,
  findOneSession,
} = require("../services/sessionServices");
const MESSAGES = require("../utils/messages");
const { USER_ALREADY_EXIST, USER_NOT_FOUND } = require("../utils/messages");

const adminController = {};

adminController.signUp = async (req, res) => {
  const payload = req.body;
  let admin = await findOneAdmin({
    email: payload.email,
  });
  if (admin) {
    return res.status(404).json({ message: USER_ALREADY_EXIST });
  }
  admin = await createAdmin(payload);
  const adminToken = await generateToken({ _id: admin._id });
  const sessionObj = {
    userId: admin._id,
    token: adminToken,
    userType: "admin",
  };
  await createSession(sessionObj);
  res.status(200).json(sessionObj);
};

adminController.login = async (req, res) => {
  const payload = req.body;
  const admin = await findOneAdmin(
    {
      email: payload.email,
      password: payload.password,
    },
    {}
  );
  if (!admin) {
    return res.status(400).json({ message: USER_NOT_FOUND });
  }
  const token = await findOneSession(
    { userId: admin._id },
    { _id: 0, userType: 0 }
  );
  return res.status(200).json(token);
};

adminController.addBus = async (req, res) => {
  const payload = req.body;
  let bus = await findOneBus({ busNumber: payload.busNumber });
  if (bus) {
    return res.status(409).json({ message: MESSAGES.BUS_EXIST });
  }
  bus = await createBus(payload);
  res.status(200).json({ message: MESSAGES.BUS_CREATED_SUCCESSFULLY });
};

module.exports = adminController;

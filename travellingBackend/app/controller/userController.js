const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { findOneUser, createUser, findOneAndDeleteUser } = require("../services/userServices");
const MESSAGES = require("../utils/messages");
const { SECRETKEY } = require("../../config");
const {
  createSession,
  findOneAndSession,
  findOneAndDeleteSession,
  findOneSession,
} = require("../services/sessionServices");

const userController = {};
userController.signup = async (req, res) => {
  console.log(" signup ");

  if (await findOneUser({ email: req.body.email })) {
    return res.status(409).json({ message: MESSAGES.USER_EXIST });
  }
  const user = await createUser({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    userType: req.body.userType,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  );
  const token = jwt.sign({ _id: user._id }, SECRETKEY);
  const session = {
    userId: user._id,
    token: token,
    userType: req.body.userType
    // user type
  };
  await createSession(session);
  return res.status(200).json(session);
};

userController.login = async (req, res) => {
  console.log(" login :");
  const user = await findOneUser({ email: req.body.email });
  console.log(" user :", user);
  if (!user) {
    return res.status(404).json({ message: MESSAGES.USER_NOT_EXIST });
  }
  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  console.log(passwordMatch)
  if (passwordMatch) {
    const token = await findOneSession({ userId: user._id, userType: user.userType });
    return res.status(200).json(token);
  } else {
    return res.status(401).json({ message: MESSAGES.INVALID_PASSWORD });
  }
};

userController.deleteUser = async (req, res) => {
  await findOneAndDeleteUser({ _id: req.body.userId });
  await findOneAndDeleteSession({ token: req.headers.authorization });
  return res.status(200).json({ message: MESSAGES.USER_DELETED });
};

module.exports = userController;

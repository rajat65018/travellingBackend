const jwt = require("jsonwebtoken");
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
  if (await findOneUser({ email: req.body.email })) {
    return res.status(409).json({ message: MESSAGES.USER_EXIST });
  }
  const user = await createUser(req.body);
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
  const user = findOneUser({ email: req.body.email });
  console.log(" user :",user);
  if (!user) {
    return res.status(404).json({ message: MESSAGES.USER_NOT_EXIST });
  }
  const passwordMatch = await compare(req.body.password, user.password);

if (!passwordMatch) {
  return res.status(401).json({ message: MESSAGES.INVALID_PASSWORD });
}
  const token = await findOneSession({ userId: user._id,userType: user.userType });
  return res.status(200).json(token);
};

userController.deleteUser = async (req, res) => {
  await findOneAndDeleteUser({ _id: req.body.userId });
  await findOneAndDeleteSession({token:req.headers.authorization});
  return res.status(200).json({ message: MESSAGES.USER_DELETED });
};

module.exports = userController;

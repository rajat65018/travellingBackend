const { findOneSession } = require("../services/sessionServices");
const MESSAGES = require("../utils/messages");

const userAuth = async (req, res, next) => {
  const session = await findOneSession({ token: req.headers.authorization });
  if (!session) {
    return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_USER });
  }
  req.body.userId = session.userId;
  next();
};

module.exports = userAuth;

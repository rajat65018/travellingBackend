
const { findOneSession } = require("../services/sessionServices");
const MESSAGES = require("../utils/messages");

async function adminAuth(req, res, next) {
  const token = req.headers.authorization;
  const adminToken = await findOneSession({token:token,userType:'admin'});
  if (!adminToken) {
    return res.status(404).json({ message: MESSAGES.UNAUTHORIZED_USER });
  }
  next();
}

module.exports = adminAuth;

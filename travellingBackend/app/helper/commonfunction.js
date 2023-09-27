const jwt = require("jsonwebtoken");
const { SECRETKEY } = require("../../config");

const commonFunction = {};

commonFunction.decryptToken = (payload) => {
  return jwt.verify(payload, SECRETKEY);
};

commonFunction.generateToken = (payload) => {
  return jwt.sign(payload, SECRETKEY);
};

module.exports = commonFunction;

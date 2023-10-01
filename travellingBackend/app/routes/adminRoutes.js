const express = require("express");
const adminController = require("../controller/adminController");
const adminAuth = require("../middleware/adminAuth");
// const { signup, login } = require("../controller/userController");
const adminRoutes = express.Router();

adminRoutes.post("/adminSignUp", adminController.signUp);

adminRoutes.post("/adminLogin", adminController.login);

adminRoutes.put("/admin");

adminRoutes.post('/addBus',adminAuth,adminController.addBus);

module.exports = adminRoutes;

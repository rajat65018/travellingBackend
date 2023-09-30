const express = require("express");
const { signup, login, deleteUser } = require("../controller/userController");
const userAuth = require("../middleware/userAuth");
const userRouter = express.Router();

userRouter.post("/signup",signup);

userRouter.post('/login',login);

userRouter.delete('/user',userAuth,deleteUser);

module.exports = userRouter;

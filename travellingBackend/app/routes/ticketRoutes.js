const express=require('express');
const userAuth = require('../middleware/userAuth');
const { bookTicket } = require('../controller/ticketController');
const ticketRoutes=express.Router();

ticketRoutes.post('/bookTicket',userAuth,bookTicket);

module.exports=ticketRoutes;
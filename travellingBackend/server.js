require('dotenv').config();
const express=require('express');
const dbConnect = require('./app/statup/dbConnect');
const { PORT } = require('./config');
const userRouter = require('./app/routes/userRoutes');
const adminRoutes = require('./app/routes/adminRoutes');
const ticketRoutes = require('./app/routes/ticketRoutes');
const app=express();
app.use(express.json());
// app.use((req,res)=>{
//     console.log(req.body);
// })
app.use(adminRoutes);
app.use(ticketRoutes);
app.use(userRouter);

dbConnect().then((val)=>{
    app.listen(PORT,()=>{
        console.log('server running successfully at port no:',PORT);
    })
}).catch((err)=>{
    console.log('an error occured');
});
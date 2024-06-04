import  express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import messsageRoutes from './routes/message.route.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth',authRoutes);
app.use('/api/messages',messsageRoutes);
app.use('/api/users',userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)});
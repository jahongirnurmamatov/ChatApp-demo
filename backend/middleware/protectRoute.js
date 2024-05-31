import jwt, { decode } from 'jsonwebtoken';
import User from '../models/user.model';

const protectRoute = async (req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized -No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Unauthorized -Invalid token"});
        }
        const user = await User.findById(decode.userId).select('-password');
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        req.user=user;
        next();


    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
};

export default protectRoute;

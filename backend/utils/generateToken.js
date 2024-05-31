import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'5d'
    });
    res.cookie("jwt-token",token,{
        maxAge:5*24*60*60*1000,
        httpOnly:true, //prevent XSS attacks
        sameSite:'strict'
    })
};

export default generateTokenAndSetCookie;
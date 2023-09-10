const jwt=require("jsonwebtoken")
const SECRET_KEY="Rahul03"
const UserDemo=require("../models/UserDEMO")
const demoAuth=async(req,res,next)=>{
try {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
      try {
        token = authorization.split(" ")[1];
        // verify token
        const { userID } = jwt.verify(token, "pleaseSubscribe");
        // Get User from Token
        req.user = await UserDemo.findById(userID).select("--password");
        next();
      } catch (error) {
        return res.status(401).json({ message: "unAuthorized User" });
      }
    } else {
      return res.status(401).json({ message: "unAuthorized User" });
    }   
} catch (error) {
    console.log(error)
}
}
module.exports=demoAuth
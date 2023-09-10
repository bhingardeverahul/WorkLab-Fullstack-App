// const jwt=require("jsonwebtoken")
// const SECRET_KEY="Rahul03"
const isLogin = async(req,res,next)=>{

    try {
        
       if(req.user.id){
        // const data = jwt.verify(token, SECRET_KEY);
        // req.user = data.user;
        // next();
     }
       else{
           res.send('due to login not redirect Page');
       }
       next();
    } catch (error) {
        console.log(error.message +"due to login not redirect Page");
    }

}

const isLogout = async(req,res,next)=>{

    try {
        if(req.user.id){
        // const data = jwt.verify(token, SECRET_KEY);
        // req.user = data.user;
    }
    next();
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    isLogin,
    isLogout
}
const jwt =require("jsonwebtoken");
const User =require("../model/userSchema");

const Authenticate =  async (req, res, next)  => {
    try{

        const token = req.cookies.jwtoken;
        const verifyToken =jwt.verify(token,`shubhamdhootshubhamdhootshubhamd`);
         const rootUser = await User.findOne({_id:verifyToken._id , "tokens.token" : token });
         if(!rootUser){
             throw new Error("User not FOund");
         }   
            req.token = token;
            req.rootUser =rootUser;
            req.userID = rootUser._id;
            next();
    
    }
    catch (error){
            res.status(401).send("unauthorised: no token proviesd  ")
            console.log(error);
    }

}

module.exports = Authenticate;
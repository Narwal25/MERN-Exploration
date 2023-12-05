const jwt  = require('jsonwebtoken');
const User = require("../model/userSchema");


const  Authenticate = async (req, res, next) =>{
    try{

        const token = req.cookies.jwtoken;
        const veryifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        
        if (!rootUser) { throw new Error ("Couldn't find User")}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;


    }catch(err){
        res.status(401).send('Unauthorized');
        console.log(err);
    }
}

module.exports = Authenticate;
require("dotenv").config();
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const tokenHead = req.headers['authorization'];
        const token = tokenHead.split(" ")[1];
        
        const jwtPassword = process.env.USER_PASS;
        const decode = jwt.verify(token, jwtPassword);

        next();
    }catch(err){
        res.status(500).json({
            error: "Invalid token",
        })
    }
}



module.exports = userMiddleware;
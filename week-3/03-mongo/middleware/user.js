const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const username = req.headers['username'];
        const password = req.headers['password'];

        if(!username || !password){
            res.status(404).json({
                message: "Username or Password not found",
            })
        }

        const user = await User.findOne({username: username});
        if(!user){
            res.status(404).json({
                message: "This route is only for admins !!",
            })
        }

        if(user.password !== password){
            res.status(403).json({
                message: "Incorrect Password",
            })
        }

        next();
    }catch(err){
        res.status(500).json({
            "error": "Could not verify the user",
        })
    }
}

module.exports = userMiddleware;
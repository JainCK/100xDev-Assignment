require("dotenv").config();
const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
try {
    const tokenHd = req.headers["authorization"];
    const token = tokenHd.split("")[1];

    const jwtPassword= process.env.ADMIN_PASS;
    const decode = jwt.verify(token, jwtPassword);

    next();
}catch {
    res.status(500).json({
        error: "token invalid",
        message: err.message,
    })
}

}

module.exports = adminMiddleware;
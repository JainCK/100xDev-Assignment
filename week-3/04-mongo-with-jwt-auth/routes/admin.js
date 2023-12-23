const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const jwt = require('jsonwebtoken');
const router = Router();
require('dotenv').config();

// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            res.status(404).json ({
                message: "Username or Password not Found"
            });
        }

        const jwtPassword = process.env.jwtPassword;
        const token = jwt.sign({username: username, password: password}, jwtPassword)

        const updateUser = await Admin.findOneAndUpdate(
            {username: username},
            {
                token: token,
            },
            {new: true}
        )

        res.status(200).json ({
            token: token,
        })

    } catch(err) {
        res.status(500).json({
            message: "Admin could not be signed"
        })
    }
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
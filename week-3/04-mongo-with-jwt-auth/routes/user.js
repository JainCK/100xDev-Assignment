const { Router } = require("express");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const app = Router();
require('dotenv').config();

// User Routes
app.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            res.status(404).json({
                message: "Username or Password not found",
            })
        }

        const jwtPassword = process.env.USER_PASS;
        const token = jwt.sign({username: username, password: password}, jwtPassword)

        const updateUser = await User.findOneAndUpdate(
            {username: username},
            {
                token: token,
            },
            {new: true}
        )

        res.status(200).json({
            token: token,
        })
    }catch(err){
        res.status(500).json({
            message: "User could not be signed-in !!",
        })
    }
});

app.post('/signup', async(req, res) => {
    // Implement admin signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            res.status(404).json({
                message: "Username or Password not found",
            })
        }

        const newUser = await User.create({
            username: username,
            password: password,
            coursesCreated: [],
            token: "",
        })

        res.status(200).json({
            message: 'User created successfully',
        })
    }catch(err){
        res.status(500).json({
            message: "User could not be created !!",
        })
    }
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

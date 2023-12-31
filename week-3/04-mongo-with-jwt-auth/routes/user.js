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

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const allCourses = await Course.find();

        res.status(200).json({
            courses: allCourses,
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
        })
    }
});


app.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const tokenHead = req.headers['authorization'];
        const token = tokenHead.split(" ")[1];
        const courseId = req.params.courseId;

        const user = await User.findOne({token: token});

        const updateUser = await User.findByIdAndUpdate(
            user._id,
            {
                $push: {
                    coursesEnrolled: courseId,
                }
            },
            {new: true},
        )

        const updateCourse = await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    usersEnrolled: user._id,
                }
            },
            {new: true},
        )

        res.status(200).json({
            message: 'Course purchased successfully'
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        })
    }
});

app.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const tokenHead = req.headers['authorization'];
        const token = tokenHead.split(" ")[1];
        console.log(token);
        const user = await User.findOne({token: token});
        console.log(user);
        res.status(200).json({
            purchasedCourses: user.coursesEnrolled,
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        })
    }
});



const { Router } = require("express");
const app = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
app.post('/signup', async(req, res) => {
    // Implement user signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            res.status(404).json({
                message: "Username or Password not found",
            })
        }

        const newAdmin = await Admin.create({
            name: username,
            password: password,
            coursesCreated: [],
        })

        res.status(200).json({
            message: 'Admin created successfully',
        })
    }catch(err){
        res.status(500).json({
            message: "Admin could not be created !!",
        })
    }
});

app.get('/courses', async(req, res) => {
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

app.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try{
        const username = req.headers['username'];
        const courseId = req.params.courseId;

        const user = await User.find({username: username});

        await User.findByIdAndUpdate(
            user._id,
            {
                $push: {
                    coursesEnrolled: courseId,
                }
            },
            {new: true},
        )

        await Course.findByIdAndUpdate(
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
        })
    }
});

app.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try{
        const username = req.headers['username'];

        const user = await User.find({username: username});

        res.status(200).json({
            purchasedCourses: user.coursesEnrolled,
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
        })
    }
});

module.exports = app;
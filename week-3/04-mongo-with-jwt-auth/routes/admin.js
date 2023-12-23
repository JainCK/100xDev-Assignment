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

app.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            res.status(404).json ({
                message: "Username or Password not Found"
            });
        }

        const newAdmin = await Admin.create({
            username: username,
            password: password,
            coursesCreated: []
        })

        res.status(200).json({
            message: 'Admin created successfully'
        })

    } catch (error) {
        res.status(500).json({
            message:  'Admin cannot be created'
        })
        
    }
});

app.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    try {
        const tokenHead = req.headers['authorization'];
        const token = tokenHead.split(" ")[1];

        const user = await Admin.findOne({token: token});

        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imageLink = req.body.imageLink;

        const newCourse = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            createdBy: user.username,
            published: true,
            usersEnrolled: [], 
        })
        const addCourse = await Admin.findByIdAndUpdate(
            user._id,
            {
                $push:{
                    coursesCreated: newCourse._id,
                }
            },
            {new: true},
        )

        res.status(200).json({
            message: 'Course created successfully', 
            courseId: newCourse._id,
        })

    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
        })
    }
});



app.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
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

module.exports = router;
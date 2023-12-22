const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const app = Router();

// Admin Routes
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

app.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try{
        const username = req.headers['username'];
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imageLink = req.body.imageLink;

        const newCourse = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            createdBy: username,
            published: true,
            usersEnrolled: [],
        })

        const user = await Admin.find({username: username});
        await Admin.findByIdAndUpdate(
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

app.get('/courses', adminMiddleware, async(req, res) => {
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

module.exports = app;
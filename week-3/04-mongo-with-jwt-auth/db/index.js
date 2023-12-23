const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courseCreated: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }],
    token: string
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    courseEnrolled: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }],
    token: string
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    price: Number,
    description: String,
    imageLink: String,
    createdBy: String,
    published: {
        type: Boolean,
        default: false,
    },
    usersEnrolled: [{
        type: mongoose.Schema.type.ObjectId,
        ref: "User",
    }]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
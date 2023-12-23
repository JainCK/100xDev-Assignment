const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(MONGO_URI);

// Define schemas
const AdminSchema = new mongoose.Schema({
    name: String,
    password: String,
    coursesCreated: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }]
});

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    coursesEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }]
});

const CourseSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

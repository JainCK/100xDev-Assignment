const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URI)

const todoSchema = mongoose.Schema({
    title : String,
    desc: String,
    completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;
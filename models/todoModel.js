const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a todo title"]
    },
    description: { type: String },
    completed: { type: Boolean, default: false }
})

const Todo = mongoose.model('Todos', todoSchema);
module.exports = Todo;
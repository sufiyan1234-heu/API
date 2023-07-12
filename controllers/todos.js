const Todo = require('../models/todoModel')

const getAllTodos = async (req, res) => {
    let todos = await Todo.find()
    return res.send(todos)
}
const createNewTodo = async (req, res) => {
    let todo = new Todo();
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.completed = req.body.completed;
    await todo.save();
    return res.send(todo);
}
const updateTodo = async (req, res) => {
    let todo = await Todo.findById(req.params.id);
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.completed = req.body.completed;
    await todo.save();
    return res.send(todo);
}

module.exports = { getAllTodos, createNewTodo, updateTodo };

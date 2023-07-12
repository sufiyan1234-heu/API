const Todo = require('../models/todoModel')

const getAllTodos = async (req, res) => {
    let todos = await Todo.find()
    return res.send(todos)
}


module.exports = { getAllTodos };

const express = require('express');
const router = express.Router();

const { getAllTodos, createNewTodo, updateTodo, deleteTodo } = require("../controllers/todos")

router.get("/", getAllTodos)
router.post("/", createNewTodo)

router.put("/:id", updateTodo)

router.delete("/:id", deleteTodo)
module.exports = router;
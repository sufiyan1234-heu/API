const express = require('express');
const router = express.Router();

const { getAllTodos, createNewTodo, updateTodo } = require("../controllers/todos")

router.get("/", getAllTodos)
router.post("/", createNewTodo)

router.put("/:id", updateTodo)

module.exports = router;
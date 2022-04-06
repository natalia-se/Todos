const router = require("express").Router();
const Todo = require("../models/Todo");
const { requireLogin } = require("./auth");

// Create todo
router.post("/create", requireLogin, async (req, res) => {
  const { userId } = req.user;
  const text = req.body.text;
  const newTodo = new Todo({ userId, text });
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all todos
router.get("/", requireLogin, async (req, res) => {
  const userId = req.user.userId;
  try {
    const todos = await Todo.find({ userId })
      .sort({ createdAt: -1 })
      .populate("userId")
      .exec();

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;

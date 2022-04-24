const router = require("express").Router();
const Todo = require("../models/Todo");
const { requireLogin } = require("./auth");

// Create todo
router.post("/todos/create", requireLogin, async (req, res) => {
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
router.get("/todos", requireLogin, async (req, res) => {
  const userId = req.user.userId;
  console.log(req.query);
  const { isTodoCompleted } = req.query;
  try {
    const todos = await Todo.find({ userId, isDone: isTodoCompleted })
      .sort({ createdAt: -1 })
      .populate("userId")
      .exec();

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.patch("/todos/:id", requireLogin, async (req, res) => {
  const id = req.params.id;
  const { userId } = req.user;

  try {
    const todo = await Todo.findById(id);
    todo.isDone = !todo.isDone;

    if (todo.userId.toString() === userId) {
      try {
        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can update only your message");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

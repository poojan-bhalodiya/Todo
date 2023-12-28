const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

//getTodos
router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:todoID", updateTodo);

router.delete("/todos/:ID", deleteTodo); 

module.exports = router;

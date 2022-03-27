const router = require('express').Router();

const { createTask, deleteTask, updateTask } = require('./task.controllers');
const { taskValidator, exists, noteIDValidator } = require('./middlewares/');

router.post("/", taskValidator, createTask);
router.delete("/:noteID", [noteIDValidator, exists], deleteTask)
router.patch("/:noteID", [exists, noteIDValidator], updateTask)


module.exports = router

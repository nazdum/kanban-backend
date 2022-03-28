const router = require('express').Router();

const { createTask, deleteTask, updateTask } = require('./task.controllers');
const { taskValidator, exists, noteIDValidator, userIDValidator } = require('./middlewares/');

router.post("/", taskValidator, createTask);
router.delete("/:noteID", [noteIDValidator, exists , userIDValidator], deleteTask)
router.patch("/:noteID", [noteIDValidator, exists ], updateTask)


module.exports = router

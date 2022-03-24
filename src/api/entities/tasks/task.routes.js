const router = require('express').Router();

const { createTask, deleteTask } = require('./task.controllers');
const taskValidator = require('./middlewares/taskValidator');

router.post("/", taskValidator, createTask);
router.delete("/", deleteTask);

module.exports = router

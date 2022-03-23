const router = require('express').Router();

const { createTask, deleteTask } = require('./task.controllers');

router.post("/", createTask);
router.delete("/", deleteTask);

module.exports = router

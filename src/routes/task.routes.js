const router = require('express').Router();

const { createTask, deleteTask } = require('../controllers/task.controllers');

router.post("/", createTask);
router.delete("/", deleteTask);

module.exports = router

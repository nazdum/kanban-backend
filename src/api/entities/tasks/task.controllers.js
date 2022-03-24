const Task = require('./task.model');
const User = require('../user/user.model');

const createTask = async (request, response) => {

    const { title, description, authorID } = request.body;

    const user = await User.findById(authorID)
    const task = new Task({ title, description, state: "to do", author: authorID });

    try {
        const savedTask = await task.save()
        user.tasks.push(savedTask._id)
        await user.save();
        response.status(201).json({ message: "task saved successfully", savedTask })

    } catch (error) {
        response.status(500).json(error)
    }


}

const deleteTask = (request, response) => {
    response.json({ "msg": "deleteTask" });
}

module.exports = {
    createTask, deleteTask
}
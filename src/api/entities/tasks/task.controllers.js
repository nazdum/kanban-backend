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


const deleteTask = async (request, response) => {

    const { noteID } = request.params
    const { authorID } = request.body


    try {

        await Task.findByIdAndDelete(noteID.toString())

        const user = await User.findById(authorID)
        user.tasks = user.tasks.filter(task => task.toString() !== noteID.toString())

        user.save()

        return response.status(200).json({ message: "task deleted successfully" })



    } catch (error) {
        return response.status(500).json({ error: "internal error" })
    }

}


const updateTask = async (request, response) => {

    const { noteID } = request.params

    try {
        const updatedTask = await Task.findByIdAndUpdate(noteID, request.body)
        response.status(200).json({ message: "note updated" })

    } catch (error) {
        response.status(500).json({ error: "internal error" })
    }

}

module.exports = {
    createTask, deleteTask, updateTask
}
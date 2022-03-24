const { Schema, model } = require("mongoose")

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    state: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user" , required: true },
})

const Task = model("task", TaskSchema)

module.exports = Task
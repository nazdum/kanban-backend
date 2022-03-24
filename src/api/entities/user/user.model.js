const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task',
    }]
})

const User = model("user", UserSchema)

module.exports = User
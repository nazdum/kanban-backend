
const createTask = (request, response) => {
    response.json({ "msg": "createTask" });
}

const deleteTask = (request, response) => {
    response.json({ "msg": "deleteTask" });
}

module.exports = {
    createTask, deleteTask
}
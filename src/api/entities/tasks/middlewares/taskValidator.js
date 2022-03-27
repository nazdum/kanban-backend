const regexID = require('../../common/idRegex')

const taskValidator = (request, response, next) => {

    const { title, state } = request.body;

    if (!(title && state)) {
        return response.status(400).json({ error: "missing parameters (title or state)" });
    }

    if (title.length < 3) {
        return response.status(400).json({ error: "title must have at least 4 characters" })
    }

    const estados = ["to do", "in progress", "completed"]
    if (!estados.some(estado => estado === state)) {
        return response.status(400).json({ error: "invalid task state" })
    }

    next()
}

module.exports = taskValidator;
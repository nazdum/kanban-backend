const taskValidator = (request, response, next) => {

    const { title, state, authorID } = request.body;

    if (!(title  && state && authorID)) {
        return response.status(400).json({ error: "missing parameters (title, state or authorID)" });
    }

    if (title.length < 3) {
        return response.status(400).json({ error: "title must have at least 4 characters" })
    }

    const regex = /^[a-z0-9]{24}$/
    if (!regex.test(authorID)) {
        return response.status(400).json({ error: "invalid authorID format" });
    }

    const estados = ["to do", "in progress", "completed"]
    if (!estados.some(estado => estado === state)) {
        return response.status(400).json({ error: "invalid task state" })
    }

    next()
}

module.exports = taskValidator;
const res = require("express/lib/response");

const inputValidation = (request, response, next) => {

    const { username, password } = request.body;

    if (!(username && password)) {
        return response.status(400).json({ error: "missing parameters (username or password)" })
    }

    if (!(username.length > 3 && password.length > 3)) {
        return response.status(400).json({ error: "username and password must have at least 3 characters" })
    } else {
        next()
    }
}

module.exports = inputValidation        
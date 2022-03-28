const regexID = require('../../common/idRegex')

const userIDValidator = (request, response, next) => {

    const { authorID } = request.body

    if (!authorID) {
        return response.status(400).json({ error: "missing authorID" })
    }


    regexID.test(authorID.toString()) ?
        next() :
        response.status(400).json({ error: "invalid ID" })

}

module.exports = userIDValidator;
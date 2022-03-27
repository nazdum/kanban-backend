const regexID = require('../../common/idRegex')

const noteIDValidator = (request, response, next) => {

    const { noteID } = request.params

    regexID.test(noteID.toString()) ?
        next() :
        response.status(400).json({ error: "invalid ID" })

}

module.exports = noteIDValidator;
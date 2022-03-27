const User = require('../task.model')

const exists = async (request, response, next) => {

    const method = request.method

    const httpMethods = {
        "PATCH": "update",
        "DELETE": "delete",
        "GET": "obtain"
    }

    await User.findById(request.params.noteID) ?
        next() :
        response.status(400).json({ error: `The note that you are trying to ${httpMethods[method]} does not exists` })


}

module.exports = exists
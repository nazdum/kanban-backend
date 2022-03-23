const User = require('./user.model')
const { hashPassword } = require('./helpers/PasswordCrypter');

const createUser = async (request, response) => {

    const { username, password } = request.body
    const user = new User({ username, passwordHash: await hashPassword(password) })

    try {
        await user.save()
        response.status(201).json({ message: 'user created', user })
    } catch (error) {
        response.status(500).json(error)
    }

}



module.exports = { createUser }
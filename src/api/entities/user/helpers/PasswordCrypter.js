const bcrypt = require('bcrypt')

const hashPassword = async password => {
    const saltRounds = 10 // "vueltas" que da el algortimo de encriptado
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
}

module.exports = {
    hashPassword
}
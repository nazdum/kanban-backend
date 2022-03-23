const router = require('express').Router();

const inputValidation = require('./middlewares/inputValidation')
const { createUser } = require('./user.controllers')

router.post('/', inputValidation, createUser)

module.exports = router
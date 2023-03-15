const usersRouter = require('express').Router()
const usersController = require('../controllers/users.controller')

usersRouter

 .post('/create', usersController.loginUser)


module.exports = usersRouter
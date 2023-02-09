const usersRouter = require('express').Router()
const usersController = require('../controllers/users.controller')

usersRouter
//.get('/', usersController.createUser)
 .post('/create', usersController.loginUser)


module.exports = usersRouter
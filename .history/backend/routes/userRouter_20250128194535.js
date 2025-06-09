const express = require('express');

const { loginUser, addUser, userCredits } = require('../controllers/userController.js')

const userRouter = express.Router()
userRouter.post('/register', addUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits', userCredits)

module.exports = userRouter 
import express from 'express'
const { loginUser, addUser } = require('../controllers/userController.js')

const userRouter = express.Router()
userRouter.post('/register', addUser)
userRouter.post('/login', loginUser)

module.exports = userRouter
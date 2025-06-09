const { loginUser, addUser } = require('../controllers/userController.js')
const express = express()
const userRouter = express.Router()
userRouter.post('/register', addUser)
userRouter.post('/login', loginUser)

module.exports = userRouter
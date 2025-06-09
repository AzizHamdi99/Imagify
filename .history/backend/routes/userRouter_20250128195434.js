const express = require('express');

const { loginUser, addUser, userCredits } = require('../controllers/userController.js');
const { userAuth } = require('../middlewares/auth.js');

const userRouter = express.Router()
userRouter.post('/register', addUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits', userAuth, userCredits)

module.exports = userRouter 
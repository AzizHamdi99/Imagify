const express = require('express')

const { genrateImage } = require('../controllers/imageController.js')
const userAuth = require('../middlewares/auth.js')

const imageRouter = express.Router()
imageRouter.post('/generateImage', userAuth, genrateImage)

module.exports = imageRouter 
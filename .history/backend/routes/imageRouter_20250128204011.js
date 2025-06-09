const express = require('express')

const { genrateImage } = require('../controllers/imageController.js')
const userAuth = require('../middlewares/auth.js')

const imageRouter = express.Router()
imageRouter.post('/generate-image', userAuth, genrateImage)

module.exports = imageRouter 
const express = require('express')

const { genrateImage } = require('../controllers/imageController.js')

const imageRouter = express.Router()
imageRouter.post('/generate')
const express = require('express')

const app = express()
const db = require('./models/index.js')
const cors = require("cors")
app.use(cors())

app.use(express.json())





app.get('/', (req, res) => {
    res.send('connected to notify api')
})

const port = 3000

app.listen(port, () => {
    console.log((`server is running on port${port}`))
})
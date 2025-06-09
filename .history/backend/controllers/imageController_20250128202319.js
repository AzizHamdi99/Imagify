const { User } = require("../models")
import FormData from "form-data"
const axios = require('axios')

const genrateImage = async (req, res) => {
    try {
        const { user_id, prompt } = req.body
        const user = await User.findByPk(user_id)
        if (!user || !prompt) {
            res.json({ success: false, message: "messing details" })
        }
        if (user.credits <= 0) {
            res.json({ success: false, message: "no credit balance" })


        }
        const formData = new FormData()
        formData.append('prompt', prompt)
        await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, Headers)

    }
    catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
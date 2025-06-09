const { User } = require("../models")


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
        const formData

    }
    catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
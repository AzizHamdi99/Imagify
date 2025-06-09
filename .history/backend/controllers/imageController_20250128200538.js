


const genrateImage = async (req, res) => {
    try {
        const { user_id, prompt } = req.body

    }
    catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
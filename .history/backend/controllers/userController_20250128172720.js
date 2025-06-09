const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { where } = require('sequelize')


const addUser = async (req, res) => {
    const { email, name, password } = req.body
    try {
        let exist = await User.findOne({ where: { email } })
        if (exist) {
            return res.json({ success: false, message: "user already exist" })

        }
        if (!validator(email)) {
            return res.json({ success: false, message: "enter a valid email" })

        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        let info = {
            name: name,
            email: email,
            password: hashedPassword
        }
        const user = await User.create(info)
        const token = creaToken(user.id)
        res.json({ success: true, token })



    } catch (error) {
        console.log("error adding user", error)
        res.json({ success: false, message: error })


    }
}
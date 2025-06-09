const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { where } = require('sequelize')
const validator = require('validator');
const creatToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)


}

const addUser = async (req, res) => {
    const { email, name, password } = req.body
    try {
        let exist = await User.findOne({ where: { email } })
        if (exist) {
            return res.json({ success: false, message: "user already exist" })

        }
        if (!validator.isEmail(email)) {
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
        const token = creatToken(user.id)
        res.json({ success: true, token })



    } catch (error) {
        console.log("error adding user", error)
        res.json({ success: false, message: error })


    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.json({ success: false, message: 'INvalid credentials' })

        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'INvalid credentials' })

        }
        const token = creatToken(user.id)
        res.json({ success: true, token })



    } catch (error) {
        console.log("login error", error)
        res.json({ success: false, message: "Something went wrong during login. Please try again later." })

    }

}


const userCredits = async (req, res) => {

    try {
        const { }
    }

}

module.exports = {
    addUser, loginUser
}
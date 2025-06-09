const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { where } = require('sequelize')


const addUser = async (req, res) => {
    const { email, name, password } = req.body
    try {
        let exist = await User.findOne({ where: { email } })
        if (exist) {
            return res.json({ success: false, message: "" })

        }



    } catch (eroor) {

    }
}
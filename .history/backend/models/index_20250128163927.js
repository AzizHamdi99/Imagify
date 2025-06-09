const { Sequelize, DataTypes } = require("sequelize")
//const { development } = require("../config/config")

const config = require('../config/config.js')['development']

const sequalize = new Sequelize(

    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false
    }

)
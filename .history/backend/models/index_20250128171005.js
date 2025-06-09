const { Sequelize, DataTypes } = require("sequelize")
//const { development } = require("../config/config")

const config = require('../config/config.js')['development']

const sequelize = new Sequelize(

    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false
    }

)

sequelize.authenticate().then(() => {
    console.log("connected to data base")
}).catch((error) => {
    console.log({ error_connection: error })
})
const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require('./userModel.js')(sequelize, DataTypes)

db.sequelize.sync({ alter: true }).then(() => {
    console.log("yes re_cyned")
}).catch((error) => {
    console.log({ eroor_sync: error })
})

module.exports = db
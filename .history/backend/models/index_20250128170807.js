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

sequalize.authenticate().then(() => {
    console.log("connected to data base")
}).catch((error) => {
    console.log({ error_connection: error })
})
const db = {}

db.sequelize = sequalize
db.Sequelize = Sequelize

db.User = require('./userModel.js')(sequelize, DataTypes)

db.sequelize.sync({ alter: false }).then(() => {
    console.log("yes re_cyned")
}).catch((error) => {
    console.log({ eroor_sync: error })
})

module.exports = db
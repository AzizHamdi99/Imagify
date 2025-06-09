const { Sequelize, DataTypes } = require('sequelize')

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('user', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        credits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5,
        }



    }, {
        tablename: "Users",
        timestamps: true

    })
    User.beforeCreate((user) => {
        user.credits = 5;
    });
    return User
}
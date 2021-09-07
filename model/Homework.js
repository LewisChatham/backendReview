const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/connection")

class Homework extends Model {}

Homework.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grade: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: "notification",
        timestamps: false,

    }
)

module.exports = Notification
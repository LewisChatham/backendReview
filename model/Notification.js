const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/connection")


class Notification extends Model {}

Notification.init(
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
        homework_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "homework",
                key: "id",
            },
        },
        acknowledged: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        sequelize,
        tableName: "notification",
        timestamps: false,

    }
)

module.exports = Notification
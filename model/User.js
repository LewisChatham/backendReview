const { Model, DataTypes } = reuire('sequelize');
const sequelize = require("../config/connection")

class User extends Model {

}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    isInstructor: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,
        },
    },
},
{
    sequelize,
    tableName: "user",
    timestamps: false,
})


module.exports = User
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/config.js'
import bcrypt from 'bcrypt'

class User extends Model {}

User.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 50,
            min: 2,
            notEmpty: true
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 50,
            min: 2,
            notEmpty: true
        }    
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 6
        }
    }
}, {
    sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
})

export default User 
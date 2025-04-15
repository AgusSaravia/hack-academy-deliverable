import { Model, DataTypes } from "sequelize"
import {sequelize} from "../config/config.js"

/*Blog Articles: 

title: String 
articlebody: TEXT
author: String
*/
class Article extends Model {}

Article.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articlebody: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: "Article"
})

export default Article
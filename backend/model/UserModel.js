import { STRING, Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const user = db.define('users',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    gender:DataTypes.STRING,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();
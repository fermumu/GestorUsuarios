const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBaseConfig.js");

const User = sequelize.define("User",{    //Definicion del modelo para la BD con los campos name y email
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }
});


module.exports = User;  //Exportamos el modelo
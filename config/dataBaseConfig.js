
const { Sequelize } = require("sequelize"); // Importacion para interaccion con la DB
require("dotenv").config(); // Cargamos la variable de entorno

//Creamos una instancia para tener acceso al archivo .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:"mysql",
        port:process.env.DB_PORT
    }
);

module.exports = sequelize;  // Exportamos la intancia creada para usarla en otros archivos
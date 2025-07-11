
const express = require("express");
const app = express();
const sequelize = require("./config/dataBaseConfig");
const userRoutes = require("./routes/userRoutes");
const { Sequelize } = require("sequelize");
require("dotenv").config();

app.use(express.json());
app.use("/api/users", userRoutes);  //Prefigo para las rutas

const PORT = process.env.PORT || 3000;  //Conexion con la base de datos

sequelize.sync()   //sincroniza los modelos de la DB y crea las tablas si aun no estan creadas
    .then(() => {
        console.log("Base de datos encontrada");
        app.listen(PORT, ()=>{    //inicializamos el servidor y escucha las request del usuario
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            
        });
    }).catch(err => {
        console.error("No hay coneccion con la base de datos: ",  err);
        
    });


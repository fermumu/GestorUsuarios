
const express = require("express");
const app = express();
const sequelize = require("./config/dataBaseConfig");
const userRoutes = require("./routes/userRoutes");
const { Sequelize } = require("sequelize");
require("dotenv").config();

app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log("Base de datos encontrada");
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            
        });
    }).catch(err => {
        console.error("No hay coneccion con la base de datos: ",  err);
        
    });


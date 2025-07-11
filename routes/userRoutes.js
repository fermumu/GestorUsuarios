
const express = require("express");  // Importacion para generar los enrutamientos
const router = express.Router(); // Instancia para el enrutador
const userController = require("../controllers/userController"); // Importamos funciones del controlador


router.get("/", userController.getAllUsers);   // Ruta para mostrar todos los usuarios 
router.get("/:id", userController.getUserById);  // Ruta para obtener un usuario por ID
router.post("/", userController.createUser);   // Ruta para crear un usuario nuevo
router.put("/:id", userController.updateUser);  // Ruta para actualizar el usuario por ID
router.delete("/:id", userController.deleteUser);  // Ruta para eliminar un usuario por su ID

module.exports = router;  //Exortacion de las rutas
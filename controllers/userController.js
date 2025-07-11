
const User = require("../models/userModel");

exports.getAllUsers = async(req, res) =>{    // Funcion para llamar a todos los usuarios que han sido registrados
    const users = await User.findAll();
    res.json(users);
};

exports.createUser = async(req, res) => {   //Funcion para crea un usuario nuevo
    const { name, email } = req.body;       // Extraemos los datos enviados en el cuerpo de la solicitud

    try{
        const newUser = await User.create({ name, email });  // creamos un registro nuevo en la tabla de usuarios con los datos obtenidos
        res.status(201).json(newUser);     //Respuesta esperada
    }catch{
        res.status(400).json({ message: error.message });  //Respuesta de error
    }
};

exports.getUserById = async(req, res) => {   //Funcion para hacer el llamado de un usuario por el ID
    const user = await User.findByPk(req.params.id);  //Buscamos el id del usuario en la URL

    if(user) return res.json(user);  //Si el usuario existe se devuelve la respuesta en formato Json

    res.status(404).json({ message: "Usuario no encontrado"}); // Respuesta de error
};

exports.updateUser = async(req, res) => {  // Funcion para actualizar un usuario por ID
    const { name, email } = req.body;   // Obtenemos los datos del cuerpo de la solicitud
    const user = await User.findByPk(req.params.id);  // Buscamos el usuario por el ID

    if(user){
        await user.update({ name, email });
        return res.json(user);   // Respuesta enviada en Json
    }

    res.status(404).json({ message: "Usuario no encontrado"});  // Respuesta de error
};

exports.deleteUser = async(req, res)=> {   //Funcion para eliminar un usuario por su ID
    const user = await User.findByPk(req.params.id); // Buscamos el usuario por el ID enviado en la URL
    if(user){
        await user.destroy();  //Eliminacion del usuario
        return res.json({ message: "Usuario eliminado"});  //Respuesta positiva
    }

    res.status(404).json({ message: "Usuario no encontrado" });   //Respuesta de error
};



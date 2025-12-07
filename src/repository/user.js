import User from "../model/user.js";

// Crear un usuario.
export const addUser = async(user) => {
    const userSave = new User(user);
    return userSave.save();
}

// Crear usuario, por el administrador.
export const addUserByAdmin = async(user) => {
    const userSave = new User(user);
    return userSave.save();
}

// Obtener usuario mediante su username.
export const getOneUserByUsername = async(userData) => {
    return User.findOne({username: userData});
}

// Obtener usuario mediante su email.
export const getOneUserByEmail = (userData) => {
    return User.findOne({email: userData});
}
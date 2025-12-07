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

// Obtener 1 usuario.
export const getOneUserByUsername = async(userData) => {
    return User.findOne({username: userData});
}

export const getOneUserByEmail = (userData) => {
    return User.findOne({email: userData});
}
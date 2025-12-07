import {
    addUser,
    addUserByAdmin,
    getOneUserByUsername,
    getOneUserByEmail,
} from "../repository/user.js";
import bcrypt from "bcrypt";

export const addUserService = async(user) => {
    const {username, email, password} = user;
    
    try {
        const findUserByUsername = await getOneUserByUsername(username);
        const findUserByEmail = await getOneUserByEmail(email);

        if(findUserByEmail) {
            throw new Error("Correo existente");
        }
        if(findUserByUsername) {
            throw new Error("Usuario existente");
        } else {
            const passwordHash = await bcrypt.hash(password, 10);
            await addUser({...user, password: passwordHash});
        }
    } catch (error) {
        throw new Error(error);
    }
}

export const addUserAdminService = async(user) => {
    const {username, email, password} = user;
    
    try {
        const findUserByUsername = await getOneUserByUsername(username);
        const findUserByEmail = await getOneUserByEmail(email);

        if(findUserByEmail) {
            throw new Error("Correo existente");
        }
        if(findUserByUsername) {
            throw new Error("Usuario existente");
        } else {
            const passwordHash = await bcrypt.hash(password, 10);
            await addUserByAdmin({...user, password: passwordHash});
        }
    } catch (error) {
        throw new Error(error);
    }
}

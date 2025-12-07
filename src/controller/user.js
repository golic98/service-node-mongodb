import {
    addUserService,
    addUserAdminService,
} from "../service/user.js";

export const addUserController = async(req, res) => {
    try {
        await addUserService(req.body);
        res.status(200).json({message: "Usuario agregado."});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const addUserAdminController = async(req, res) => {
    try {
        await addUserAdminService(req.body);
        res.status(200).json({message: "Usuario agregado."});
    } catch (error) {
        res.status(400).json(error.message);
    }
}
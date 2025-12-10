import {
    addUserController,
    addUserAdminController,
    getOneUserByNormalController,
} from "../controller/user.js";
import { Router } from "express";

const app = Router();

app.post("/user", addUserController);
app.post("/user/admin", addUserAdminController);

app.get("/user/:id", getOneUserByNormalController);

export default app;
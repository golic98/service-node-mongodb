import {
    addUserController,
    addUserAdminController,
} from "../controller/user.js";
import { Router } from "express";

const app = Router();

app.post("/user", addUserController);
app.post("/user/admin", addUserAdminController);

export default app;
import "dotenv/config";
import express from "express";
import user from "./src/routes/user.js";
import {connectionMongodb} from "./src/database/dbConnection.js";

const app = express();
const PORT = process.env.PORTSERVER;

connectionMongodb();

app.get("/", (res) => {
    res.status(200).json("Bienvenido a mi servidor 🚀.");
});

app.use(express.json());
app.use("/api", user);

app.listen(PORT, () => {
    console.log("El servidor está trabajando en: " + PORT + ".");
});
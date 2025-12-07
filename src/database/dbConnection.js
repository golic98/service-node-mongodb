import mongoose from "mongoose";
import "dotenv/config";

export const connectionMongodb = async() => {
    const URI = process.env.MONGOURI;
    try {
        await mongoose.connect(URI);
        console.log("Conexión a mongodb exitosa.");
    } catch (error) {
        console.log("Ocurrió un error, revisar cadena de conexión.");
    }
}
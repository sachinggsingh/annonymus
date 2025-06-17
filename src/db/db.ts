import mongoose  from "mongoose";
import { logger } from "../config/logger";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB(){
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error("MONGO_URL environment variable is not defined");
        }
        await mongoose.connect(mongoUrl);
        logger.info("Connected to DB")
    } catch (error) {
        logger.warn("Not connected to DB",error);
    }
}
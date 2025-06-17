import express, { Request, Response } from "express";
import { logger } from "./config/logger";
import {router as services} from './routes/service'
import { connectDB } from "./db/db";

const app = express();
const PORT = process.env.PORT || 3000;
connectDB()
    .then(() => logger.info("Database connection established"))
    .catch((error) => logger.error("Database connection failed", error));   

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from TypeScript + Express!");
});


app.use('/api',services);


app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

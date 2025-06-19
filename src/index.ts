import express, { Request, Response } from "express";
import { logger } from "./config/logger";
import {router as services} from './routes/service'
import { router as garment } from './routes/garment';
import { router as order } from './routes/order';
import {router as price } from './routes/pricing';
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
app.use('/api',garment);
app.use('/api',order);
app.use('/api',price);


app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

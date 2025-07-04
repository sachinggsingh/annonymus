import express, { Request, Response } from "express";
import { logger } from "./config/logger";
import {router as services} from './routes/service'
import { router as garment } from './routes/garment';
import { router as order } from './routes/order';
import {router as price } from './routes/pricing';
import { connectDB } from "./db/db";
import bodyParser from "body-parser";

import { limiter } from "./config/rate-limitter";

const app = express();
const PORT = process.env.PORT || 3000;
connectDB()   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

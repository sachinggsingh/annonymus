import express, { Request, Response } from "express";
import { logger } from "../config/logger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from TypeScript + Express!");
});

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

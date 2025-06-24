import rateLimit from "express-rate-limit";
import {logger} from './logger';

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    message: "Too many requests, Please try again after 15 minutes",
    statusCode: 429,
    handler: (req, res, next) => {
        logger.warn(`Rate limit exceeded for ${req.ip}`);
        res.status(429).send("Too many requests, please try again later.");
    },
});
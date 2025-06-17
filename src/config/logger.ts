import winston from  'winston'

export const logger =  winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'service' },
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
})
if (process.env.NODE_ENV !== 'development') {
    logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    }));
}

logger.info("Logger working perfectly");
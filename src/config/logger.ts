import winston from  'winston'

export const logger =  winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'service' },
})
if (process.env.NODE_ENV !== 'development') {
    logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    }));
}

logger.info("Logger working perfectly");
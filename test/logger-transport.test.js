import winston from "winston";

it('create new logger winston', () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.log({
        level: "info",
        message: "hello logging"
    })
})
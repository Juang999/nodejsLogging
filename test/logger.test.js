import winston from "winston";

it('create new logger winston', () => {
    const logger = winston.createLogger({})

    logger.log({
        level: "info",
        message: "hello logging"
    })
})
import winston from "winston";

it('create new logger winston', () => {
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.error("hello Error");
    logger.warn("hello Warn");
    logger.info("hello Info");
    logger.http("hello HTTP");
    logger.verbose("hello Verbose");
    logger.debug("hello Debug");
    logger.silly("hello Silly");
})
import winston from "winston";

it.only('test logging format', () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        // format: winston.format.logstash(),
        format: winston.format.printf(log => {
            return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info("hello format");
    logger.warn("hello format");
    logger.error("hello format");
})

it('test logging format', () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info("hello Info");
})
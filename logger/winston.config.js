const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

//my custom format
const myFormat = printf(({ level, message, timestamp, ...body }) => {
    let log = `${timestamp} [${level}] ${message} \n`;
    log += "Request:" + JSON.stringify(body.request) + "\n"
    log += "Response:" + JSON.stringify(body.response) + "\n"
    log += "-".repeat(100)
    return log;
});

//custom logger
const customLogger = () => {
    return createLogger({

        format: combine(
            timestamp(),
            myFormat
        ),
        transports: [
            new transports.File({ filename: 'winston.log' })
        ]
    });
}

module.exports = customLogger()
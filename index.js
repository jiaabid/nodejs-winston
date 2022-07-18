const express = require("express");
const app = express();
const logger = require("./logger/winston.config");


logger.info({
    message: "hello",
    request: { url: "abc/hello", body: { a: 1, b: 'hello' } },
    response: { success: true, data: [], message: "added!", statusCode: 200 }
})

logger.error({
    message: "hello",
    request: { url: "abc/hello", body: { a: 1, b: 'hello' } },
    response: { success: false, data: [], message: "error in adding!", statusCode: 400 }
})
logger.warn({
    message: "hello",
    request: { url: "abc/hello", body: { a: 1, b: 'hello' } },
    response: { success: true, data: [], message: "added!", statusCode: 200 }
})

app.listen(3333, _ =>logger.info({message:`server started at ${3333}`,request:{},response:{}}))
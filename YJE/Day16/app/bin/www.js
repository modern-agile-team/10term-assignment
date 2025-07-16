"use strict";

const app = require("../../app");
const logger = require("../../src/config/logger");
const PORT = process.env.PORT || 3000;

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", PORT);
app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
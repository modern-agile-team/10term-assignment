"use strict";

// 모듈
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

// 라우팅 파일 가져오기
const router = require("./src/routes/home");

// app 세팅(ejs 사용)
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들 웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/src/public`));
app.use("/", router);

app.listen(3000, () => {
  console.log("서버 가동");
})

module.exports = app;
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 데이터 가져오기
router.get("/", ctrl.output.home);

// 할 일 추가
router.post("/todo", ctrl.process.addTodo);

// 할 일, 밑줄 수정
router.patch("/todos/:id", ctrl.process.editTodo);
router.patch("/todos/:id/check", ctrl.process.toggleCheck);

// 할 일 삭제
router.delete("/todos/:id", ctrl.process.removeTodo);


module.exports = router;
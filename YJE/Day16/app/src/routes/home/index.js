// 라우팅
"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/todos", ctrl.output.todos);

router.post("/add", ctrl.process.add);
router.post("/delete", ctrl.process.delete);
router.post("/edit", ctrl.process.edit);
router.post("/complete", ctrl.process.complete);

module.exports = router;
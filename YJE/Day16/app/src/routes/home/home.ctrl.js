"use strict";

const Todo = require("../../models/Todo");
const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "홈 화면 렌더링"`);
    res.render("home/index");
  },

  todos: async (req, res) => {
    const todos = await Todo.getTodos();
    res.json(todos);
  }
}

const process = {
  add: async (req, res) => {
    const todo = new Todo(req.body);
    // 객체 반환
    const response = await todo.add();

    const url = {
      method: "POST",
      path: "/add",
      status: response.err ? 400 : 201
    }

    log(response, url);
    // 객체를 json으로 변환
    return res.status(url.status).json(response);
  },

  delete: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.delete();

    const url = {
      method: "POST",
      path: "/delete",
      status: response.err ? 400 : 200
    }

    log(response, url);
    return res.status(url.status).json(response);
  },

  edit: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.edit();

    const url = {
      method: "POST",
      path: "/edit",
      status: response.err ? 400 : 200
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  complete: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.complete();

    const url = {
      method: "POST",
      path: "/complete",
      status: response.err ? 400 : 200
    };

    log(response, url);
    return res.status(url.status).json(response);
  }
}

const log = (response, url) => {
  if (response.err) {
    logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`);
  }
  else {
    logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`);
  }
}

module.exports = {
  output,
  process
};
"use strict";

const todoStorage = require("./todoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  static async getTodos() {
    try {
      const todos = await todoStorage.getAll();
      return todos;
    } catch (err) {
      return { success: false, err };
    }
  }

  async add() {
    try {
      const response = await todoStorage.save(this.body);
      // 객체 반환
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async delete() {
    try {
      const id = this.body.id;
      const response = await todoStorage.delete(id);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async edit() {
    try {
      const { id, description } = this.body;
      const response = await todoStorage.edit(id, description);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async complete() {
    try {
      const id = this.body.id;
      const response = await todoStorage.complete(id);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

}

module.exports = Todo;
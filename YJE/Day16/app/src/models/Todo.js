"use strict";

const todoStorage = require("./todoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  static async execute(operation) {
    try {
      const result = await operation();
      return result;
    } catch (err) {
      return { success: false, err };
    }
  }

  static async getTodos() {
    return this.execute(() => todoStorage.getAll());
  }

  async add() {
    return Todo.execute(() => todoStorage.save(this.body));
  }

  async delete() {
    const id = this.body.id;
    return Todo.execute(() => todoStorage.delete(id));
  }

  async edit() {
    const { id, description } = this.body;
    return Todo.execute(() => todoStorage.edit(id, description));
  }

  async complete() {
    const id = this.body.id;
    return Todo.execute(() => todoStorage.complete(id));
  }
}

module.exports = Todo;

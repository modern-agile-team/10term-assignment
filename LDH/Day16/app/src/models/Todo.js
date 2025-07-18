"use strict";

const TodoStorage = require("./TodoStorage");

class Todo {
    constructor(body) {
        this.body = body;
    }

    async getAllTodos() {
        try {
            const todos = await TodoStorage.getAllTodos();
            return { success: true, todos };
        } catch (err) {
            return { success: false, err };
        }
    }

    async add() {
        try {
            const response = await TodoStorage.save(this.body);
            return { success: true, response };
        } catch (err) {
            return { success: false, err };
        }
    }

   async edit() {
        try {
            return await TodoStorage.edit(this.body);
        } catch (err) {
            return { success: false, err };
        }
    }

    async check() {
        try {
            return await TodoStorage.check(this.body);
        } catch (err) {
            return { success: false, err };
        }
    }

    async remove() {
        try {
            return await TodoStorage.remove(this.body);
        } catch (err) {
            return { success: false, err };
        }
    }

}

module.exports = Todo;
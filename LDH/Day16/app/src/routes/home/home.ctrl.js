"use strict";

const Todo = require("../../models/Todo");

const output = {
    home: async (req, res) => {
        const todoInstance  = new Todo();
        const response = await todoInstance.getAllTodos();

        if (response.success) {
            res.render("home/index", { todos: response.todos || []});
        } else {
            res.status(500).send("To-do 데이터를 가져오는 중 오류가 발생했습니다.");
        }
    }
};

const process = {
    addTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        const { response } = await todoInstance.add();

        return  res.json({
            success: true,
            id: response.id,
            name: response.name,
        });
    },

    editTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        await todoInstance.edit();
        const { id, name } = req.body;

        return res.json({
            success: true,
            id,
            name,
        });
    },

    toggleCheck: async (req, res) => {
        const todoInstance = new Todo(req.body);
        await todoInstance.check();
        const { id, check } = req.body;

        return  res.json({
            success: true,
            id,
            check,
        });
    },

    removeTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        await todoInstance.remove();
        const { id } = req.body;
        
        return  res.json({
            success: true,
            id,
        });
    },
}

module.exports = {
    output,
    process,
};
"use strict";

const db = require("../config/db");

class TodoStorage {
    static getAllTodos() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM todo";
            db.query(query, (err, data) => {
                if (err) return reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async save(todo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todo(name, `check`) VALUES(?,?);";
            const defaultcheck = todo.is_completed || false;

            db.query(query, [todo.name, defaultcheck], (err, result) => {
                if (err) return reject(`${err}`);

                const insertedId = result.insertId;
                const selectquery = "SELECT id, name, `check` FROM todo WHERE id = ?;";

                db.query(selectquery, [insertedId], (err2, data) => {
                    if (err2) return reject(`${err2}`);

                    const datas = data[0];
                    resolve({
                        success: true,
                        id: datas.id,
                        name: datas.name,
                        check: datas.check,
                    });
                });
            });
        });
    }

    static async edit(todo) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE todo SET name = ? WHERE id = ?;";
            db.query(query, [todo.name, todo.id], (err) => {
                if (err) return reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

    static async check(todo) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE todo SET `check` = ? WHERE id = ?;";
            db.query(query, [todo.check, todo.id], (err) => {
                if (err) return reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

    static async remove(todo) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM todo WHERE id = ?;";
            db.query(query, [todo.id], (err) => {
                if (err) return reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = TodoStorage;

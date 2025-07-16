"use strict";

const db = require("../config/db");

class todoStorage {
  static save(todoInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO todo(description) VALUES (?);";
      db.query(query, [todoInfo.description], (err, data) => {
        if (err) reject(`${err}`);
        // 쿼리를 성공적으로 실행했을 때 제공해주는 값(insertId)
        else resolve({ success: true, id: data.insertId });
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM todo WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static edit(id, description) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE todo SET description = ? WHERE id = ?";
      db.query(query, [description, id], (err, data) => {
        if (err) reject(err);
        else resolve({ success: true, data });
      });
    });
  }

  static complete(id) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE todo SET is_check = NOT is_check WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM todo ORDER BY id DESC";
      db.query(query, (err, rows) => {
        if (err) reject(`${err}`);
        else resolve(rows);
      });
    });
  }
}

module.exports = todoStorage;
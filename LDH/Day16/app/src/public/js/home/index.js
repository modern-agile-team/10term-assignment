"use strict";

import { handleAddTodo } from './addItem.js';
import { handleEdit } from './editItem.js';
import { handleRemove } from './RemoveItem.js';
import { handleCompleteToggle } from './toggleCompleteStyle.js';

const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button"),
    todoBox = document.querySelector(".todo-box");

function handleAdd(event) {
    const req = {
        name: toDo.value,
    };
    if (event.key === "Enter" || event.type === "click") {
        if (toDo.value === "") {
            alert("값을 입력하세요!");
        } else {
            handleAddTodo(req, todoBox, toDo);
        }
    }
}

function applyStrikethrough() {
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const checkbox = item.querySelector(".todo-check");
        const text = item.querySelector(".todo-text");

        if (checkbox && checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "#797979";
        }
    });
}

document.addEventListener("DOMContentLoaded", applyStrikethrough);  // 처음에 취소선 표시

toDo.addEventListener("keydown", handleAdd);
loginBtn.addEventListener("click", handleAdd);

todoBox.addEventListener("click", (event) => {
    if (event.target.closest(".edit-btn")) {
        handleEdit(event);
    } else if (event.target.closest(".delete-btn")) {
        handleRemove(event);
    }
});
todoBox.addEventListener("change", handleCompleteToggle);   // 체크완료 시 밑줄 표시
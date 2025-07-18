"use strict";

function handleAddTodo(req, todoBox, toDo) {
    fetch("/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            const html = `
                <div class="todo-item" data-id="${res.id}">
                <div class="todo-left">
                    <input type="checkbox" class="todo-check" />
                    <span class="todo-text" style="display:block">${res.name}</span>
                    <input class="edit-input" value="${res.name}" style="display:none" />
                </div>
                <div class="todo-right">
                    <button class="edit-btn">
                    <img src="/images/home/pen-solid.svg" alt="수정" />
                    </button>
                    <button class="delete-btn">
                    <img src="/images/home/trash-can.svg" alt="삭제" />
                    </button>
                </div>
                </div>
            `;
            todoBox.insertAdjacentHTML("beforeend", html);
            toDo.value = "";
        })
        .catch((err) => {
            console.error("toDo 추가 중 에러 발생");
        });
}

export { handleAddTodo };
"use strict";

function handleRemove(event) {
    const removeBtn = event.target.closest(".delete-btn");
    if (removeBtn) {
        const todoItem = removeBtn.closest(".todo-item");
        const id = todoItem.dataset.id;

        todoItem.remove();

        const req = {
            id: id,
        };
        
        fetch(`/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                // if (res.success) {
                //     alert("삭제 완료!");
                // }
            })
            .catch((err) => {
                console.error("toDo 삭제 중 에러 발생");
            });
    }
}

export { handleRemove };
"use strict";

function handleCompleteToggle(event) {
    const checkbox = event.target.closest(".todo-check");

    if (checkbox) {
        const todoItem = checkbox.closest(".todo-item");
        const text = todoItem.querySelector(".todo-text");
        const isChecked = checkbox.checked;
        
        if (isChecked) {
            text.style.textDecoration = "line-through";
            text.style.color = "#797979";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "";
        }

        const id = todoItem.dataset.id;
        

        const req = {
            id: id,
            check: isChecked ? "true" : "false",
        };

        fetch(`/todos/${id}/check`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            })
                .then((res) => res.json())
                .then((res) => {
                    //     if (res.success) {
                    //     alert("밑줄 완료!");
                    // }
                })
                .catch((err) => {
                    console.error("toDo 취소선 중 에러 발생");
                });
    }
}

export { handleCompleteToggle };
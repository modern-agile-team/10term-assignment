const input = document.getElementById('input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    add();
  }
})
// 페이지 로드가 끝났을 때 실행
document.addEventListener("DOMContentLoaded", loadTodos);

function add() {
  const description = input.value.trim();

  if (!description) {
    return alert('할 일을 입력해주세요.');
  }

  // 객체, 배열만 json으로 변경 가능
  const req = { description };

  fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // json으로 변경
    body: JSON.stringify(req)
  })
    // 다시 객체로 변경
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        input.value = '';
        loadTodos();
      } else {
        if (result.err) return alert(result.err);
        alert('할 일 추가에 실패했습니다.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('서버 요청 중 에러가 발생했습니다.');
    });
}

function loadTodos() {
  fetch("/todos")
    .then(res => res.json())
    .then(todos => {
      const ul = document.getElementById("todoList");
      ul.innerHTML = "";

      // 각 row 만들기
      todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";

        // 체크 박스 만들기
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-check";
        checkbox.addEventListener("change", () => {
          // 체크되면 completeTodo 메서드 실행
          completeTodo(todo.id, checkbox.checked, checkbox);
        });
        checkbox.checked = todo.is_check;

        // 텍스트 만들기
        const span = document.createElement("span");
        span.textContent = todo.description;
        span.className = "todo-text";

        // iconBox
        const iconBox = document.createElement("div");
        iconBox.className = "icon-box";

        // 수정 버튼
        const editBtn = document.createElement("i");
        editBtn.className = "fa-solid fa-pen";
        editBtn.style.cursor = "pointer";
        // 체크 여부에 따라 밑줄 추가 및 수정 버튼 표시, 숨김 처리
        if (todo.is_check === 1) {
          span.classList.add("completed");
          editBtn.style.display = "none";  
        } else {
          span.classList.remove("completed");
          editBtn.style.display = "inline-block";
          editBtn.onclick = () => editTodo(todo.id, span);
        }

        // 삭제 버튼
        const delBtn = document.createElement("i");
        delBtn.className = "fa-solid fa-trash";
        delBtn.style.cursor = "pointer";
        delBtn.style.marginLeft = "8px";
        delBtn.onclick = () => deleteTodo(todo.id);

        // contentBox
        const contentBox = document.createElement("div");
        contentBox.className = "content-box";

        // iconBox, contentBox에 추가
        iconBox.appendChild(editBtn);
        iconBox.appendChild(delBtn);
        contentBox.appendChild(checkbox);
        contentBox.appendChild(span);

        // li에 iconBox, contentBox 추가
        li.appendChild(contentBox);
        li.appendChild(iconBox);
        ul.appendChild(li);
      });
    })
    .catch(err => {
      console.error("할 일 목록 불러오기 실패: ", err);
    });
}

async function deleteTodo(id) {
  const res = await fetch("/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });

  const result = await res.json();
  if (result.success) loadTodos();
  else alert("삭제 실패");
}

function editTodo(id, span) {
  // 원래 텍스트를 input으로 바꾸기
  const originalText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = originalText;
  input.className = "edit-input";
  input.style.fontSize = "20px";

  // li 찾기
  const li = span.parentElement.parentElement;
  // li에서 iconBox 찾기
  const iconBox = li.querySelector(".icon-box");
  // iconBox 비우기
  iconBox.innerHTML = "";

  // 체크 버튼 만들기
  const checkBtn = document.createElement("i");
  checkBtn.className = "fa-solid fa-check";
  checkBtn.style.cursor = "pointer";
  checkBtn.style.marginLeft = "8px";
  checkBtn.style.fontSize = "25px";
  // 취소 버튼 만들기
  const cancelBtn = document.createElement("i");
  cancelBtn.className = "fa-solid fa-xmark";
  cancelBtn.style.cursor = "pointer";
  cancelBtn.style.marginLeft = "8px";
  cancelBtn.style.fontSize = "25px";
  // 취소 버튼 누르면 원상복귀
  cancelBtn.onclick = () => {
    // input을 span으로 되돌리기
    input.replaceWith(span);
    // iconBox 비우고 수정, 삭제 버튼 추가하기
    iconBox.innerHTML = "";
    iconBox.appendChild(editBtn);
    iconBox.appendChild(delBtn);
  };

  // 내용 변경 메서드
  function submitEdit() {
    const newText = input.value.trim();
    if (!newText) {
      alert("내용이 비어있습니다.");
      input.focus();
      return;
    }
    fetch("/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, description: newText })
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          loadTodos();
        } else {
          alert("수정 실패");
          input.focus();
        }
      })
      .catch(err => {
        console.error("수정 에러", err);
        alert("서버 오류");
      });
  }

  // 체크 클릭 시 제출
  checkBtn.onclick = submitEdit;
  // Enter 키로 제출
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitEdit();
    }
  });

  // 수정, 삭제 버튼 새로 생성(취소 시 복구용)
  const editBtn = document.createElement("i");
  editBtn.className = "fa-solid fa-pen";
  editBtn.style.cursor = "pointer";
  editBtn.onclick = () => editTodo(id, span);
  const delBtn = document.createElement("i");
  delBtn.className = "fa-solid fa-trash";
  delBtn.style.cursor = "pointer";
  delBtn.style.marginLeft = "8px";
  delBtn.onclick = () => deleteTodo(id);

  // 체크, 취소 버튼 만들고 span을 input으로 바꾸기
  iconBox.appendChild(checkBtn);
  iconBox.appendChild(cancelBtn);
  span.replaceWith(input);
  input.focus();
}

function completeTodo(id, checked, checkbox) {
  fetch("/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, is_check: checked ? 1 : 0 })
  })
    .then(res => res.json())
    .then(result => {
      if (!result.success) {
        alert("상태 변경 실패");
        checkbox.checked = !checked;
      } else {
        loadTodos();
      }
    })
    .catch(() => {
      alert("서버 요청 실패");
      checkbox.checked = !checked;
    });
}
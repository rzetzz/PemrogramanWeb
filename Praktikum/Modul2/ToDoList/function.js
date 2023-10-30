function addTodo() {
  var todoText = document.getElementById("new-todo").value;

  if (todoText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML = `
            <div class="task-text">${todoText}</div>
            <div class="thebutton">
                <button style="background-color: rgb(46, 163, 46);" onclick="editTask(this)"><i class="bi bi-pencil-square bi-2x"></i></button>
                <button style="background-color: rgb(206, 50, 50);" onclick="removeTodo(this)"><i class="bi bi-trash-fill bi-2x"></i></button>
                <button style="background-color: rgb(46, 163, 46);" onclick="completeTask(this)"><i class="bi bi-check-lg bi-5x"></i></button>
            </div>
            
        `;

  document.getElementById("todo-list").appendChild(listItem);
  document.getElementById("new-todo").value = "";
}

function editTask(button) {
  var listItem = button.parentElement.parentElement;
  var taskText = listItem.querySelector(".task-text");

  if (taskText.getAttribute("contenteditable") !== "true") {
    taskText.setAttribute("contenteditable", "true");
    taskText.style.border = "1px solid #ccc";
    taskText.focus();

    taskText.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        taskText.setAttribute("contenteditable", "false");
        taskText.style.border = "none";
      }
    });
  } else {
    taskText.setAttribute("contenteditable", "false");
    taskText.style.border = "none";
  }
}

function removeTodo(button) {
  var listItem = button.parentElement.parentElement;
  listItem.remove();
}

function completeTask(button) {
  var listItem = button.parentElement.parentElement;
  var taskText = listItem.querySelector(".task-text");
  taskText.classList.toggle("completed");
}

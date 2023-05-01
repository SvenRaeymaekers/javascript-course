const addBtn = document.querySelector('.add-todo-btn');
const todosDiv = document.querySelector('.todos');
const inputToDo = document.querySelector('#inputTodo');
const dateInput = document.querySelector('#inputDate');



let todoListHTML = "";
let todoList = [];

// entering a todo, firstly with button, then with enter
addBtn.addEventListener('click', function () {
  addToDo();
});

inputToDo.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    addToDo();
  }
});


//function that adds the todo to our list
function addToDo() {
  let todoName = inputToDo.value;
  let todoDate = dateInput.value;
  if (todoName !== "") {

    inputToDo.value = '';

    console.log(todoDate === "");
    todoDate = todoDate === "" ? "no due date" : todoDate;
    let tempTodo = { name: todoName, date: todoDate };
    todoList.push(tempTodo);
    renderToDoListHTML();
  }
}

function renderToDoListHTML() {
  //empty our list
  todoListHTML = "";
  todoList.forEach(function (todo) {

    let todoIndex = todoList.indexOf(todo);
    let todoHTML =
      `<div class="todo">
          <div class="todoName">${todo.name}</div>
          <div class="todoDate">${todo.date}</div>
          <button class="finished-btn" onclick='
              todoList.splice(${todoIndex},1);
              renderToDoListHTML();
              '>
              Finished
          </button>
      </div>`;

    todoListHTML += todoHTML;
  });


  todosDiv.innerHTML = todoListHTML;
}


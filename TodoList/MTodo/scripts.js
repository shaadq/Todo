const todoList = document.querySelector(".todo-list");
let todoName = document.querySelector(".input-top__name");
let todoSelected = document.querySelector(".input-top__select");
let todoDescription = document.querySelector(".input-bottom");
const submitBtn = document.querySelector(".submit-btn");

let todoHistory = [
  {
    id: 1,
    todoName: "egujhe",
    todoSelected: "med",
    todoDescription: "ajhgduhw",
  },
];
let selectedRow = null;

const addTodoDOM = (newTodo) => {
  const todo = document.createElement("tr");
  todo.innerHTML += `
    <td><input type="checkbox" name="checkbox" id="${newTodo.id}" /></td>
    <td>${newTodo.todoName}</td>
    <td>${newTodo.todoSelected}</td>
    <td>${newTodo.todoDescription}</td>
    <td>
      <i class="fa-solid fa-trash delete-btn" onclick="deleteTodo(${newTodo.id})"></i>
      <!-- <i class="fa-regular fa-pen-to-square edit-btn" onclick="editTodo(${newTodo.id})"></i> -->
      <i class="fa-regular fa-pen-to-square edit-btn" onclick="editTodo(this)"></i>
    </td>
  `;

  todoList.appendChild(todo);
};

const addTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    id: generateId(),
    todoName: todoName.value,
    todoSelected: todoSelected.value,
    todoDescription: todoDescription.value,
  };
  todoHistory.push(newTodo);
  addTodoDOM(newTodo);
};

const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

const editTodo = (id) => {
  selectedRow = id.parentElement.parentElement;
  todoName.value = selectedRow.cells[1].innerHTML;
  todoSelected.value = selectedRow.cells[2].innerHTML;
  todoDescription.value = selectedRow.cells[3].innerHTML;
};

const deleteTodo = (id) => {
  todoHistory = todoHistory.filter((item) => item.id !== id);
  init();
};

const init = () => {
  todoList.innerHTML = "";
  todoHistory.forEach(addTodoDOM);
};
init();

submitBtn.addEventListener("click", addTodo);
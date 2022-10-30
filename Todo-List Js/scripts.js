const todo = document.getElementById("inp1");
const todoDes = document.getElementById("inp2");
const priority = document.getElementById("Dropdown");
const todoTable = document.getElementById("tbodyy");
const editBtn = document.getElementById("editBtn");
const addBtn = document.getElementById("b1");

let todoList = [];
let selectedRow = null;
let todoJson = [
  {
    id: 1,
    todoName: "Football",
    todoSelected: "High",
    todoDescription: "with Friends",
  },
];

function clickAdd() {
  if (todo.value === "" || todoDes.value === "") {
    alert("Fill all the required fields.");
  } else {
    addBtn.disabled=false;
    editBtn.disabled=true;
    const data = {
      id: generateId(),
      todo: todo.value,
      todoDes: todoDes.value,
      priority: priority.value,
    };
    todoList.push(data);
    console.log(todoList);
    todo.value = "";
    todoDes.value = "";
    JSON.stringify(todoList);
    displayTodo(data);
  }
}

function displayTodo(data) {
//   const todo = document.createElement("tr");
//   console.log(todo);
//   todoList.forEach((list, ind) => {
//   todo.innerHTML += `
//       <td>${data.id}</td>
//       <td>${data.todo}</td>
//       <td>${data.priority}</td>
//       <td>${data.todoDes}</td>
//       <td>
//         <i class="fa-solid fa-trash-can" onclick="deleteTodo(${ind}})"></i></td>
//         <i class="fa-solid fa-pen-to-square" onclick="editTodo(this)"></i>
//       </td>
//     `;
//   })
// todoTable.appendChild(todo);

    let html = "";
    todoList.forEach((list, ind) => {
      html += `
          <tr class="tr">
              <td>${list.id}</td>
              <td>${list.todo}</td>
              <td>${list.priority}</td>
              <td>${list.todoDes}</td>
              <td><i class="fa-solid fa-trash-can" onclick="deleteTodo(${ind})"></i></td>
              <td><i class="fa-solid fa-pen-to-square" onclick="editTodo(this,${ind})"></i></td>
          </tr>
          `;
    });
    todoTable.innerHTML = html;
}


const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

function deleteTodo(ind) {
  todoList.splice(ind, 1);
  JSON.stringify(todoList);
  displayTodo();
}

const editTodo = (id,ind) => {
  console.log(id);
  selectedRow = id.parentElement.parentElement;
  console.log(selectedRow)
  todo.value = selectedRow.cells[1].innerHTML;
  priority.value = selectedRow.cells[2].innerHTML;
  todoDes.value = selectedRow.cells[3].innerHTML; 
  addBtn.disabled=true;
  editBtn.disabled=false;
  deleteAfterEdit(ind);
};

const deleteAfterEdit = (ind) => {
    todoList.splice(ind, 1);
    JSON.stringify(todoList);
    displayTodo();
}

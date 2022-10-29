// const displayTodoList = document.getElementById("todolist");

// let todoList = [];

// function clickAdd(e) {
//   // e.preventDefault();
//   const todo = document.getElementById("task");
//   const todoDes = document.getElementById("description");
//   const priority = document.getElementById("mySelect");

//   console.log(todo.value);

//   let data = {
//     todo: todo.value,
//     todoDes: todoDes.value,
//     priority: priority.value,
//   };

//   todoList.push(data);
//   JSON.stringify(todoList);
//   console.log(data);
//   displayTodo();
// }

// function displayTodo(e) {
//   // e.preventDefault();
//   let html = "";

//   todoList.forEach((list, ind) => {
//     html += `
//     <tr>
//       <td>${list.todo}</td>
//       <td>${list.todoDes}</td>
//       <td>${list.priority}</td>
//       <td>
//        <i class="fa-solid fa-trash-can" onclick="deleteTodo(${ind})"></i> 
//        <i class="fa-solid fa-pen-to-square" onclick="editTodo(${ind})"></i>
//       </td>
//     </tr> 
//     `;
//   });

//   displayTodoList.innerHTML = html;
// }

// function deleteTodo(ind) {
//   todoList.splice(ind, 1);
//   displayTodo();
// }
// function editTodo(ind) {}


const todo = document.getElementById("inp1")
const todoDes = document.getElementById("inp2")
const priority = document.getElementById("Dropdown")
const todoTable = document.getElementById("tbodyy")

let todoList=[]

function addTodo(){
    let data={
        todo:todo.value,
        todoDes:todoDes.value,
        priority:priority.value,
    }
    todoList.push(data)
    todo.value=""
    todoDes.value=""
    JSON.stringify(todoList)
    console.log(todoList)
    displayTodo()
}



function displayTodo(){
    let html=""
    todoList.forEach((list,ind)=>{

        html+=`
       
        
        <tr class="tr">
            <th>${ind}</th>
            <th>${list.todo}</th>
            <th>${list.priority}</th>
            <th>${list.todoDes}</th>
            <th><button onclick="deleteTodo(${ind})">Delete</button></th>
            <th><button onclick="editTodo(${ind})">Edit</button></th>
        </tr>
    </table>
       
        
        `
    })
    todoTable.innerHTML=html
    
}

function deleteTodo(ind){
    // filteredTodo = todoList.filter((items)=>items.id !== id);
    // displayTodo();

    todoList.splice(ind,1)
    JSON.stringify(todoList)
    displayTodo()
}

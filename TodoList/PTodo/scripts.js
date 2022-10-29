const todo = document.getElementById("inp1")
const todoDes = document.getElementById("inp2")
const priority = document.getElementById("Dropdown")
const todoTable = document.getElementById("tbodyy")
const editBtn = document.getElementById("editBtn")
const addBtn = document.getElementById("b1")

let todoList=[]

function clickAdd(){

    if (todo.value ==="" || todoDes.value ==="") {
        alert('Fill all the required fields.');
    }
    else {
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
}


  
function displayTodo() {
    let html=""
    todoList.forEach((list,ind)=>{

        html+=`
        <tr class="tr">
            <th>${ind}</th>
            <th>${list.todo}</th>
            <th>${list.priority}</th>
            <th>${list.todoDes}</th>
            <th><i class="fa-solid fa-trash-can" onclick="deleteTodo(${ind})"></i></th>
            <th><i class="fa-solid fa-pen-to-square" onclick="editTodo()"></i></th>
        </tr>
    </table>      
        `
    })
    todoTable.innerHTML=html
    
}

function deleteTodo(ind){
    todoList.splice(ind,1)
    JSON.stringify(todoList)
    displayTodo()
}

function editTodo(task,prio,desc) {
    addBtn.styple.display="none";
    editBtn.style.display="block";
}
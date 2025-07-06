const inputBox = document.getElementById('inputBox'); 
const addBtn = document.getElementById('addBtn'); 
const todoList = document.getElementById('todoList'); 

let editTodo = null;


// Function to add todo
const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in your todo.")
        return false;
    }

    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodos(inputText);
        addBtn.value = "Add";
        inputBox.value = "";
    }

    else{

    
// Creating P tag
const li = document.createElement("li");
const p = document.createElement("p");
p.innerHTML = inputText;
li.appendChild(p); 

// Creating Edit Button;
const editBtn = document.createElement("button");
editBtn.innerText = "Edit"
editBtn.classList.add("btn", "editBtn");
li.appendChild(editBtn);


// Creating Delete Button;
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete"
deleteBtn.classList.add("btn", "deleteBtn");
li.appendChild(deleteBtn);

todoList.appendChild(li);
inputBox.value = '';

        saveLocalTodos(inputText);

}
}
//Function to update : (Edit/Delete) todo
const updateTodo = (event)=>{
    // console.log(event.target.innerHTML);
    if(event.target.innerHTML === "Delete"){
        todoList.removeChild(event.target.parentElement);
        deleteLocalTodos(event.target.parentElement); 
    }
    
    if(event.target.innerHTML === 'Edit'){
        inputBox.value = event.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = 'Edit';
        editTodo = event;
    }
}

//Function to save Local todo
const saveLocalTodos = (todo) =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];

    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }

       todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to get Local todo 
 const getLocalTodos = () =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];

    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
    
            const li = document.createElement("li");
const p = document.createElement("p");
p.innerHTML = todo;
li.appendChild(p); 

// Creating Edit Button;
const editBtn = document.createElement("button");
editBtn.innerText = "Edit"
editBtn.classList.add("btn", "editBtn");
li.appendChild(editBtn);


// Creating Delete Button;
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete"
deleteBtn.classList.add("btn", "deleteBtn");
li.appendChild(deleteBtn);

todoList.appendChild(li);

        });
    }
        
    }

// Function to delete Local todo
const deleteLocalTodos = (todo)=>{
let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];

    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }

    let todoText  = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todoIndex);
    
}

const editLocalTodos = (todo)=> {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex  = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo) 
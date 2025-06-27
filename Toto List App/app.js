const inputBox = document.getElementById('inputBox'); 
const addBtn = document.getElementById('addBtn'); 
const todoList = document.getElementById('todoList'); 


const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in your todo.")
        return false;
    }

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
}


addBtn.addEventListener('click', addTodo);
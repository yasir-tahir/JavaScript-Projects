const inputBox = document.getElementById('inputBox'); 
const addBtn = document.getElementById('addBtn'); 
const todoList = document.getElementById('todoList'); 

let editTodo = null;

const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in your todo.")
        return false;
    }

    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
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

}
}

const updateTodo = (event)=>{
    // console.log(event.target.innerHTML);
    if(event.target.innerHTML === "Delete"){
        todoList.removeChild(event.target.parentElement);
    }
    
    if(event.target.innerHTML === 'Edit'){
        inputBox.value = event.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = 'Edit';
        editTodo = event;
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo)
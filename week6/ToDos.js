//import utils from "./utilities.js";
import ls from "./ls.js";

//from instructor video
document.querySelector('#addBtn').onclick = newTodo;

function loadTodos() {
    const todoList = ls.getTodoList();
    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false};
    input.value = '';
    return newTodo;
}
function createTodoElement(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = completeTask(todo);
    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    if (todo.completed == true) {   
        todoContent.style.textDecoration = 
        'line-through';
    }
    else if (todo.completed == false) {
        todoContent.style.textDecoration = 'none';
    }
    todoContent.classList.add('todo-content');
    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);
    return todoDiv;
}
function completeTask(todo) {
    if (todo.completed == true) {
        todo.completed = false;
    }
    else {
        todo.completed = true;
    }
}
function addToList(todoDiv) {
    //add to doc
    document.querySelector('#todos').appendChild(todoDiv);
}

function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}


    


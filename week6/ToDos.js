import utils from "./utilities.js";
import ls from "./ls.js";

//from instructor vides
document.querySelector("addBtn").onclick = newTodo;

function loadTodos() {
    const todoList = ls.getTodoList();
    todoList.foreach(todo => {const el = createTodoElement(todo) 
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
    const input = document.querySelector("newTask");
    const newTodo = { id: Date.now(), content: input.nodeValue, completed: false};
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
    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
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


    


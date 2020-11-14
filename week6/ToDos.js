import utils from "./utilities.js";
import ls from "./ls.js";

//from instructor video
document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#doneFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#complete-btn').onclick = completeTask;

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
    completeBtn.onclick = completeTask;
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
function applyFilter(e) {
    document.querySelector('#todos').innerHTML='';
    let filteredTodos = [];
    const allTodos = ls.getTodoList();
    if(e.currentTarget.id == "activeFilter") {
        filteredTodos = utils.activeFilter(allTodos);   
    }
    else if (e.currentTarget.id  == "allFilter") {
        filteredTodos = allTodos;
    }
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo)
        addTodoList(el);
    })
}
function completeTask() {
console.log("complete me!");
}
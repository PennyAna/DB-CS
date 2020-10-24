//in constructor, set variable with element our todo list will be built in and key will use to read/write from localStorage

//create saveTodo(task, key)
function saveTodo(key, task) {
    var todoName = document.getElementById("").nodeValue;//key
    var todoHTML = document.getElementById("").nodeValue;//task info
    localStorage.addTodo(todoName, todoHTML); //key, task info
}
//create addTodo()
function addTodo(key, task) {

}
//bind Todos.addTodo to add button on add todo form in html

//create getTodos(key) 
function getTodos(key) {

}

//create renderTodoList(list, element)
function renderTodoList(list, element) {

}
//create Todos.listTodos()
function listTodos() {
    var todoHTML = document.getElementById("").nodeValue;
    document.getElementById("").innerHTML = todoHTML;
}
//create Todos.completeTodo()
function completeTodo() {

}
//create Todos.removeTodo()
function removeTodo() {

}
//create Todos.filterTodos()
function filterTodos() {

}
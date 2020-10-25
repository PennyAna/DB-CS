

//in constructor, set variable with element our todo list will be built in and key will use to read/write from localStorage

//create saveTodo(task, key)
export function saveTodo(key, task) {
    var todoName = document.getElementById("").nodeValue;//key
    var todoHTML = document.getElementById("").nodeValue;//task info
    localStorage.addTodo(todoName, todoHTML); //key, task info
}
//create addTodo()
export function addTodo(key, task) {

}
//bind Todos.addTodo to add button on add todo form in html

//create getTodos(key) 
export function getTodos(key) {

}

//create renderTodoList(list, element)
export function renderTodoList(list, element) {

}
//create Todos.listTodos()
export function listTodos() {
    var todoHTML = document.getElementById("").nodeValue;
    document.getElementById("").innerHTML = todoHTML;
}
//create Todos.completeTodo()
export function completeTodo() {

}
//create Todos.removeTodo()
export function removeTodo() {

}
//create Todos.filterTodos()
export function filterTodos() {

}
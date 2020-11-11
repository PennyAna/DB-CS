export default {
    saveTodo, getTodoList, deleteTodo, completeTask
}

function saveTodo(todo) {
    const todoList = getTodoList();
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
function deleteTodo(id) {
    const todoList = getTodoList(0);
    const updatedTodos = todoList.filter(todo => todo.id != id);localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    }
function completeTask(completed, div) {
    const todoList = getTodoList(0);
    const updatedTodos = todoList.filter(todo=> todo.completed != false);
    updatedTodos.forEach(div => div.style.textDecoration = 'line-through');
    todoList.concat(updatedTodos);
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
}
function getTodoList(){
    const todoListString = localStorage.getItem('todoList');
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
}


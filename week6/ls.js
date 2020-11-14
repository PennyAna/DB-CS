export default {
    saveTodo, getTodoList, deleteTodo, completeTask
}

function saveTodo(todo) {
    const todoList = getTodoList();
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
function deleteTodo(id) {
    const todoList = getTodoList();
    const updatedTodos = todoList.filter(todo => todo.id != id);localStorage.setItem('todoList', JSON.stringify(updatedTodos));
}
function getTodoList(){
    const todoListString = localStorage.getItem('todoList');
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
}
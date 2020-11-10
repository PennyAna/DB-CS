function saveTodo(todo) {
    conmst todoList = getTodoList();
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
function deleteTodo(id) {
    const todoList = getTodoList(0;
        const updatedTodos = todoList.filter(todo => todo.id != id) localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    }
function getTodoList(){
    const todoListString = localStorage.getItem('todoList');
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
}

export default {
    saveTodo, getTodoList, deleteTodo
}
//read val from localstorage and parse as JSON @param{string} key 
//the key under which the val is stored under in LS
//@return {array} the val as an array of objects
export function readFromLS(key) {

}

//write an array of objects to local storage under provided key @ param {string} key
//the key under which the val is stored under in LS
//@param{array} data the info stored as array of objects must be serialized
export function writeToLS(key, data) {
    
}
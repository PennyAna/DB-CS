import Tasks from './ToDos.js';
const myTasks = new Tasks('tasks');
window.addEventListener('load', () => {
    myTasks.showTaskList();
});

//To dynamically import a module, the import keyword may be called as a function. When used this way, it returns a promise.
//import('/modules/my-module.js')
//.then((module) => {
  // Do something with the module.
//});


//create instance of ToDos class
//add var to store list of tasks to Todos.js module.todoList = null
//import helper functions into Todo.js, Todos into main.js

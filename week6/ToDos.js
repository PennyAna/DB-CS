
const TodoList = taskList[
    {
        id: timestamp, 
        content:string, 
        completed: bool
    }
];

export default class Tasks {
    //in constructor, set variable with element our todo list will be built in and key will use to read/write from localStorage
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
   
    }
    filterAllTasks() {
        return TodoList;
    }
    filterActiveTasks() {
        return this.filterAllTasks().find(task.completed === false);
    }
    filterDoneTasks() {
        return this.filterAllTasks().find(task.completed === true);
    }
    showTaskList() {
        renderTaskList(this.parentElement, this.filterAllTasks());
        this.addTaskListener();
    }
    showOneTask() {
        const task = this.getHikeByName(hikeName);
        this.parentElement.innerHTML = '';
        this.parentElement.appendChild(renderOneTask(task));
    }
    addTaskListener() {
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child=>{
        child.addEventListener('touchend', e => {
            this.showOneTask(e.currentTarget.dataset.name);
        }); 
    });
    }
} //end of Tasks class

function showTaskList() {
    const taskListElement = document.getElementById("tasks");
    taskListElement.innerHTML = "";
    renderTaskList(taskList, taskListElement);
}
function renderTaskList(parent, tasks) {
    tasks.forEach(task => {
        parent.appendChild(renderOneTask(task));
});
}
function renderOneTask(task) {
   const item = document.createElement("li");
   task.innerHTML = <div>
   <input type="checkbox"></input>
   <p>${task.content}</p> 
   <button type="button">X</button>;
   </div>
   return item;
}
  /*need if statement to show crossed out/completed tasks*/
/*also order tasks by timestamp(id)*/



    /* saveTodo(key, task) {
        var todoName = document.getElementById("").nodeValue;//key
        var todoHTML = document.getElementById("").nodeValue;//task info
        localStorage.addTodo(todoName, todoHTML); //key, task info
    }
    //create saveTodo(task, key)

    //create addTodo()
    addTodo(key, task) {

    }
    //bind Todos.addTodo to add button on add todo form in html

    //create getTodos(key) 
    getTodos(key) {
    
    }
    //create renderTodoList(list, element)
    renderTodoList(list, element) {

    }
    //create Todos.listTodos()
   /*  listTodos() {
        var todoHTML = document.getElementById("").nodeValue;
        document.getElementById("").innerHTML = todoHTML;
    } */
    //create Todos.completeTodo()
   /*  completeTodo() {

    }
    //create Todos.removeTodo()
    removeTodo() {

    }
    //create Todos.filterTodos()
    filterTodos() {

    }
 */ 

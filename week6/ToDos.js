import utils from "./utilities.js";
import ls from "./ls.js";

//from instructor vides
document.querySelector("addBtn").onclick = newTask;
const todo = createTodo();
const todoDiv = createTodoElement(todo);
addToList(todoDiv);
ls.saveTodo(todo);

function loadTodos() {
    const todoList = ls.getTodoList();
    todoList.foreach(todo => {const el = createTodoElement(todo) addToList(el);
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


export default class Tasks {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
    }
    //getter functions
    //grab whole TodoList
    //grab single/next taskItem in TodoList
    getSingle(){

    }
    //filter functions
    //return new list of checkboxes == false
    filterActive(){

    }
    //return new list of checkboxes == true
    filterDone(){

    }
    removeSingle(){
    //use taskNumbering() to reset task num
    }  
    addSingle(){
    //use taskNumbering() to reset task num
    var todoName = document.getElementById("").nodeValue;//key
    var todoHTML = document.getElementById("").nodeValue;//task info
    localStorage.writeToLS(todoName, todoHTML); //key, task info 
    }
     //returns number of tasks left/counts number of taskItems in TodoList
    taskNumbering(){
        return TodoList.length();
    }
};
//outside of the class we put the event listeners tied to the buttons
//these have access to the Task functions because we'll create a new Task object for them to work with. 
const taskItem = {
    id: timestamp, 
        content:string, 
        completed: bool
};

const TodoList = new Array[taskItem];

const doneList = new Array[taskItem];

const activeList = new Array[taskItem];
  
 
    //render functions
    //display all taskItems in TodoList with html et checkboxes
    renderAll(){
        //needs getAll
    }
    //display all taskItems in TodoList returned by filterActive with html et checkboxes
    renderActive(){
        //needs filterActive
    }
    //display all taskItems in TodoList returned by filterDone with html et checkboxes
    renderDone(){
        //needs filterDone
    }
    //display single/next taskItem in TodoList with html et checkboxes
    renderSingle(){

    }
    //event listeners
    //for checkboxes
    //also needs to cross out task description
    
    //for 'x' (close task) button
    //uses removeSingle() 

    //for all button
    //uses getAll()->renderAll()

    //for active button
    //uses getAll()->filterActive()->renderSingle() loop

    //for completed button
    //uses getAll()->filterDone()->renderSingle() loop

    


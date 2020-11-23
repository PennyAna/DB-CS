const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'https://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log('There was an error: ', error))
}, false);

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `https://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json'
    });
    const request = new Request(url, {
        method: 'POST', 
        mode: 'cors', 
        header: headers, 
        body: JSON.stringify(task)
    })
    
    /* const number = form.task.value;
    const task = {
        userId: 1, 
        title: form.task.value, 
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    const request = new Request(url, {
        method: 'POST', header: headers, body: data
    }) */
    fetch(request)
    .then(response => response.json())
    .then(task => console.log(`${data.title} saved with an id of ${data.id}`))
    .catch( error => console.log('There was an error: ', error))
}

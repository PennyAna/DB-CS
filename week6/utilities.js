export default {
    activeFilter
}

function activeFilter(todos) {
    return todos.filter(todo => {
        return !todo.completed;
    })
}

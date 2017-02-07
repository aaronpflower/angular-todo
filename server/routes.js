const TodoController = require('./controller')

module.exports = (app) => {
    app.get('/', (req, res) => res.sendFile('index.html', { root: './public/'}))
    app.get('/api/todos', (TodoController.getTodos));
    app.post('/api/todos', TodoController.createTodo);
    app.delete('/api/todos/:id', TodoController.deleteTodo);
}
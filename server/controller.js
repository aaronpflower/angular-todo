const Todo = require('./models')

const findTodo = (req, res) => {
     Todo.find((err, todos) => {
        if (err) {
            res.send(err)
        }
        res.json(todos);
    })
}
const controller = {
    getTodos: (req, res) => {
        findTodo(req, res)
    },
    createTodo: (req, res) => {
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            findTodo(req, res)
        });
    },
    deleteTodo: (req, res) => {
        Todo.remove({
            _id : req.params.id
        }, (err, todo) => {
            if (err)
                res.send(err);
            findTodo(req, res)
        })
    }
}

module.exports = controller
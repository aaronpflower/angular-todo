const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    text : {type: String, default: ''},
    done : {type: Boolean, default: false}
});

module.exports = Todo
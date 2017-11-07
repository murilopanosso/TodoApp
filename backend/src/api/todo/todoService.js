const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValodations: true})

module.exports = Todo
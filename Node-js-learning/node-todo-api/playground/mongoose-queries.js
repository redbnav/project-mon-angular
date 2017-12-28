const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a4450b1d5a7e10c31b1ba98';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid')
}

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo)
}); */

Todo.findById(id).then((todo) => {
    if (!todo) {
        console.log('Id not found');
    }
    console.log('Todos', todo)
}).catch((e) => console.log(e));
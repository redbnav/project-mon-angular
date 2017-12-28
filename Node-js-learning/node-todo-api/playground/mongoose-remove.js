const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

/* Todo.findOneAndRemove({_id: '5a448d9207598e67c926e86c'}).then((result) => {
    console.log(result);
}); */
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a448d9207598e67c926e86c').then((result) => {
    console.log(result);
});

var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {
    Users
};



/* var newUsers = new Users({
    email: 'nav@gmail.com'
});

newUsers.save().then((doc) => {
    console.log('Email saved to users: ', doc);
}, (err) => {
    console.log('Unable to save email');
})

/* var newTodo = new Todo({
    text: 'Prepare dinner'
}); */

/* var newTodo = new Todo({
    text: '   with validations  '
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
}); */
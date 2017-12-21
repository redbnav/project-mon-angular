var getUser = (id, callback) => {
    var user = {            // user object
        id: id,
        name: 'Reddy'
    };

    setTimeout(() =>{
        callback(user)          // calling user
    }, 3000);
};

getUser(32, (userObject) => {  // prints the user obkject from the above function
    console.log(userObject);
});
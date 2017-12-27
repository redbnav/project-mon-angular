// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongodb Server');
    } 
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a441d3407598e67c926d0dd')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a4416a307598e67c926d009')
    }, {
        $set: {
            name: 'Naveen R'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongodb Server');
    } 
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').find({
        _id: new ObjectID('5a440abec018cc2aecfdf9c9')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });   //using only find() will return cursor by adding toArray() will give us required results  */

    /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}` );
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });   */

    db.collection('Users').find({name: 'Naveen'}).toArray().then((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users data', err)
    });

    // db.close();
});
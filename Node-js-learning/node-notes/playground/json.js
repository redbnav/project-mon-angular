/* 
var obj = {
    name: 'Naveen'
}; // defining an object

var stringObj = JSON.stringify(obj); //converting an object to string
console.log(typeof stringObj);
console.log(stringObj);      */

/* var personString = '{"name": "Naveen","age":27}';  // defining a string 
var person = JSON.parse(personString); //converting to object

console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote); // converting to string 
fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(originalNoteString); // converting to object

console.log(typeof note);
console.log(note)


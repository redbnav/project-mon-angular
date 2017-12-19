const fs = require('fs');
const _ = require('lodash') // documentation -> https://lodash.com/docs/4.17.4
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    
        describe: 'Title of the note',
        demand: true,
        alias: 't'
};

const bodyOptions = {
    describe: 'Body of the note',
        demand: true,
        alias: 'b'
};

const argv = yargs
.command('add','add a new note',{
    title: titleOptions,
    body: bodyOptions
})
.command('list','Lists all notes')
.command('read','Reads a note',{
    title: titleOptions
})
.command('remove','removes a note',{
    title: titleOptions
})
.help()
.argv;
var command = argv._[0];


if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Already exists')
    }
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note Read!');
        notes.logNote(note);
    } else {
        console.log('Note does not exists!! ')
    }

} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note Removed!' : 'Note Not Found!!';
    console.log(message);

} else {
    console.log('command not recognized')
}
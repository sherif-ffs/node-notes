const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs 
yargs.version('1.1.0')
// add, remove, read, list 

// add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       notes.addNote(argv.title, argv.description)
    }
})

// remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },   
     handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

// list command 
yargs.command({
    command: 'list',
    describe: 'Listing my notes note',
    handler: () => {
        notes.listNotes()
    }
})

// read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('reading a note')
    }
})

yargs.parse()
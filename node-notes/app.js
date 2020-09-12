const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

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
        console.log(chalk.black.bgGreen('Title:'), chalk.green(argv.title))
        console.log(chalk.black.bgGreen('Description:'), chalk.green(argv.description))
    }
})

// remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note')
    }
})

// list command 
yargs.command({
    command: 'list',
    describe: 'Listing my notes note',
    handler: () => {
        console.log('Listing my notes note')
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
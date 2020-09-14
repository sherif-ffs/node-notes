const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, description) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            description: description
        })
        console.log('new note added')
    } else {
        console.log('note title taken')
    }

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    let notesToKeep = notes.filter( note => {
        return note.title !== title
    })

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red('no note found '))
    } else {
        console.log(chalk.green('note removed'))
        saveNotes(notesToKeep)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNodes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
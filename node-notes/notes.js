const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, description) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    
    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green(`Note Title: ${note.title}`))
    })
}

module.exports = {
    getNodes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes
}
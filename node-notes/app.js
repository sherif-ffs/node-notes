const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')

console.log(getNotes())
console.log(validator.isEmail('sherif@gmail.com'))
console.log(chalk.red('Success'));


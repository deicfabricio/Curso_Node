const _ = require('lodash')
const chalk = require('chalk')

// npm uninstall lodash = remover pacote

// npx cowsay "hello world !" vaquinha no terminal

// npx cowsay -d "morri !" vaquinha no terminal

// dependencia de desenvolvimento = npm install --save-dev <nome>

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a,b)

console.log(chalk.bgRed.bold(diff))
const path = require('path')

console.log(path.resolve('teste.txt'))

const midfolder = "relatorios"
const filename = "fabricio.txt"

const finalpath = path.join("/", "arquivos", midfolder, filename)

console.log(finalpath)
const os = require('os')

// quantas cpus tem o servidor
console.log(os.cpus())

// quanto de memoria livre tem na maquina em bytes (memoria ram livre)
console.log(os.freemem())

// qual diretorio principal da maquina que estou usando
console.log(os.homedir())

// qual sistema operacional esta rodando nessa maquina
console.log(os.type())


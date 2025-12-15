const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts2','root','', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch (error) {
    console.log(`Nao foi possivel conectar: ${error}`)
}

module.exports = sequelize
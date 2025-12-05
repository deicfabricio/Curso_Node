const express = require('express')
const app = express()
const port = 5000
const path = require('path')

// Criar Rotas
const projectsRoutes = require('./projects')
app.use('/projects',projectsRoutes)

// Colocar CSS
app.use(express.static('public'))

const basePath = path.join(__dirname, 'pages')

app.get('/', (req,res) =>{
    res.sendFile(`${basePath}/index.html`)
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
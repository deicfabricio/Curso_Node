// Criar Rotas

const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../pages')

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/projects.html`)
})

router.get('/:id', (req,res) => {
    res.sendFile(`${basePath}/project.html`)
})

module.exports = router
const express = require('express')
const router = express.Router()
const validateUser = require('./usuarios.middleware')

const users = []
let id = 0

router.get('/', (req, res) => {
    res.json({users: users})
})

router.post('/', validateUser, (req, res) => {
    const user = req.body
    user.id = ++id
    users.push(user)
    res.json({msg: "Usuário adicionado com sucesso."})
})

module.exports = router
const express = require('express');
const router = express.Router();
const produtos = {};
const {v4: uuidv4} = require('uuid');
const validar = require('../middleware/validarProduto.middleware')

router.get('/',(req,res) =>{
    res.json({produtos: Object.values(produtos)});
})

router.post('/', validar);
router.put('/',validar);

router.post('/',(req,res) =>{
    const produto = req.body;
    const produtoId = uuidv4();
    produto.id = produtoId;
    produtos[produtoId] = produto;
    res.json({msg: 'produto adicionado'});
})

router.put('/',(req,res) =>{
    const id = req.query.id;
    if (id && produtos[id]){
        const produto = req.body;
        produto.id = id;
        produtos[id] = produto;
        res.json({msg:'produto atualizado'});
    } else {
        res.json({msg:'erro ao atualizar o produto'});
    }
})

router.delete('/',(req,res) => {
    const id = req.query.id;
    if (id && produtos[id]){
        delete produtos[id]
        res.json({msg:'produto deletado com sucesso'});
    } else {
        res.json({msg:'erro ao deletar o produto'});
    }
})

module.exports = router;
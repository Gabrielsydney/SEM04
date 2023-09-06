const express = require('express');
const router = express.Router();
const { Produto } = require('../models');
const produtos = {};
const {v4: uuidv4} = require('uuid');
const validar = require('../middleware/validarProduto.middleware')

router.get('/', async (req,res) =>{
    const prds = await Produto.findAll();
    res.json({prds: prds});
})

router.post('/', validar);
router.put('/',validar);

router.post('/',async (req,res) =>{
    const prds = await Produto.create(req.body);
    res.json({msg: 'produto adicionado'});
})

router.put('/',async (req,res) =>{
    const id = req.query.id;
    const prds = await Produto.findByPk(id);
    if (prds){
        prds.nome = req.body.nome;
        prds.preco = req.body.preco;
        prds.descricao = req.body.descricao;
        await prds.save();
        res.json({msg:'produto atualizado'});
    } else {
        res.json({msg:'erro ao atualizar o produto'});
    }
})

router.delete('/',async (req,res) => {
    const id = req.query.id;
    const prdts = await Produto.findByPk(id);
    if(prdts){
        await prdts.destroy();
        res.json({msg:'produto deletado'});
    } else {
        res.status(400).json({msg:'produto não encontrado'});
    }
})

module.exports = router;
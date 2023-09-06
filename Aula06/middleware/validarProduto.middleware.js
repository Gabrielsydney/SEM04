const Ajv = require('ajv');
const ajv = new Ajv();
const produtosSchema = require('../schemas/produtos.schema');

function validarProduto(req,res,next){
    const produto = req.body;
    const validate = ajv.compile(produtosSchema);
    const valid = validate(produto);
    if (valid){
        next()
    } else {
        res.status(400).json({msg:"Dados Inválidos"});
    }
}

module.exports = validarProduto; 
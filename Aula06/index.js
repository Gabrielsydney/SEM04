const express = require('express');
const app = express();
const rotaProdutos = require('./rotas/produtos.rota');
app.use(express.json());
app.use('/produtos', rotaProdutos);

app.get('/',(req,res) => {
    res.json({msg: "Lojinha da tia teté"})
})

app.listen(8080, () =>{
    console.log('Server rodando');
})
module.exports = {
    type: 'object',
    properties: {
        nome: {type: "string"},
        preco: {type: "number"},
        descricao: {type: "string"}
    },
    required: ["nome","preco"],
    additionalProperties: false
}
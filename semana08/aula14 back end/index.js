const express = require('express')
const app = express()
const userRota = require('./usuarios.rota')
app.use(express.json())
app.use('/users',userRota)
const port = 3000

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
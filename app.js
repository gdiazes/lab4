const express = require('express')
const app = express()
const port = 10000

app.get('/', (req, res) => {
  res.send('Lab 04')
})

app.get('/clientes', (req, res) => {
  res.send(`
    <h1> Clientes</h1>
    <br>
    <br>
    <p> Cliente 1</p> <br>
    <p> Cliente 2</p> <br>
    <p> Cliente 3</p> <br>
  `)
})

app.get('/productos', (req, res) => {
    res.send(`
        <h1> Productos</h1>
        <br>
        <br>
        <p> Producto 1</p> <br>
        <p> Producto 2</p> <br>
        <p> Producto 3</p> <br>
    `)
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})

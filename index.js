const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Acesse o endereço 'http://localhost:3500' ${port}`)
})

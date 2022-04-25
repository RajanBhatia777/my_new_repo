const express = require('express')
const app = express()

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World okok')
})

app.listen(PORT,()=>console.log(`MY server is running and runnning on port ${PORT}`))
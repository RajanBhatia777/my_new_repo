/* eslint-disable func-names */
/* eslint-disable arrow-spacing */
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World okok');
});

app.listen(PORT,()=>console.log(`Servervis running on port ${PORT}`));

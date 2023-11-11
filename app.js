// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT; 

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

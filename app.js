const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}))

// need to set this up for CSS
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}))

// need to set this up for CSS
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {
  console.log(req.body)
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  res.send("Success!" + firstName + ' ' + lastName);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

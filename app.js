const express = require('express');
const app = express();
const port = 3001;

// mailchimp library and config
const mailchimp = require("@mailchimp/mailchimp_marketing");
const config = require('./config');

mailchimp.setConfig({
  apiKey: config.apiKey,
  server: config.server,
});

// body-parser config
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

// need to set this up for CSS and logo image
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {
  // body object from body-parser
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const subscribingUser = {
    email: email,
    firstName: firstName,
    lastName: lastName
  }

  async function addSubscriber() {
    try {
      const response = await mailchimp.lists.addListMember(config.listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });

      console.log(`Successfully added contact as an audience member. The contact's id is ${ response.id }.`);
      res.send("Success")
    } catch (error) {
      console.log(error)
      res.send("Error")
    }
  }

  addSubscriber();
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
# Simple newsletter signup landing page

This is a project I've written from scratch to practice Express JS.

This project involves using a [Bootstrap template](https://getbootstrap.com/docs/4.0/examples/sign-in/) as the newsletter signup landing page. Upon submitting the form, the user's details gets saved to a Mailchimp newsletter account via the [Mailchimp API](https://mailchimp.com/developer/api/).

## Requirements

- Some of the tools used:
  - `node`
  - `express`
  - `body-parser`
  - `@mailchimp/mailchimp_marketing`

## App features

- Form to enter subscriber details
- Saving to Mailchimp newsletter
- Success and failure pages
- Failure page has option to redirect back to form landing page
- Added Procfile and Heroku port with localhost port fallback to 3001 (in case you want to deploy to Heroku)

## Getting started

- Install [Node](https://nodejs.org/en/) (and NPM).
- From a terminal, `cd` into this directory and run the command `npm install`.
- Start the Node server in terminal with `node app.js`. Alternatively, if you have Nodemon, use `nodemon app.js`.
- Create a `config.js` file in the root directory and add: 
```module.exports = {
  apiKey: YOUR API KEY,
  server: YOUR MAILCHIMP SERVER,
  listId: YOUR MAILCHIMP LIST ID
}```

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { getClients, getClient, addClient } = require('./handlers/clientHandlers');
const { getWord, getOneWord, guessLetter } = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", getClients)

  .get("/clients/:id", getClient)

  .post("/addclient", addClient)

  .get("/hangman/word/:id", getWord)

  .get("/hangman/word", getOneWord)

  .get("/hangman/guess/:id/:letter", guessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));

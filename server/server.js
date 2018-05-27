const Joi = require('joi');
const express = require('express');
const app = express();
const movies = require('../data/movies')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Blockbuster!')
  });


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}...`));

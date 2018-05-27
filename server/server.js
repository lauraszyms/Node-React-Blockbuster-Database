const Joi = require('joi');
const express = require('express');
const app = express();
const movies = require('../data/movies')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Blockbuster!')
});

app.get('/api/movies', (req, res) => {
  res.send(movies)
});

app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    rating: req.body.rating,
    yearOfRelease: req.body.yearOfRelease,
  };
  movies.push(movie);
  res.send(movie);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(c => c.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.')
  res.send(movie)
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}...`));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().required(),
    rating: Joi.string().regex(/(?<!\d)(\d(?:\.[1-9])?|10)(?!\d)/).required(),
    yearOfRelease: Joi.number().required()
  };

  return Joi.validate(movie, schema);

};

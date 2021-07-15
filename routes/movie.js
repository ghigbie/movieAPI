const express = require('express');
const router = express.Router();
const movieDetails = require('./../data/movieDetails');

/* GET home page. */
router.get('/', (req, res, next) => {
  const id = 56292; 
  const foundMovie = movieDetails.find( movie => movie.id === id);
  res.json({ 
    title: 'Movie',
    data: foundMovie,
   });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const movieDetails = require('./../data/movieDetails');
const movies = require('./../data/movies');
// needed routes
// GET / movie /top_rated

//POST /movie/{movie_id}/rating

// DELETE /movie/{movie_id}/rating

router.get('/top_rated', (req, res, next) => {
  const results = movies.filter( movie => movie.most_popular === true );
  res.json({
    results
  })
});

router.get('/:movieId', (req, res, next) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find( movie => movie.id === Number(movieId));
  res.json({
    results
  });
});


router.post('/:movieId/rating', (req, res, next) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find( movie => movie.id === Number(movieId));
  res.json({
    results
  })
})


module.exports = router;

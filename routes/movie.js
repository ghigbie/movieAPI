const express = require('express');
const router = express.Router();
const movieDetails = require('./../data/movieDetails');

// needed routes
// GET / movie /top_rated

//POST /movie/{movie_id}/rating

// DELETE /movie/{movie_id}/rating

router.get('/:movieId', (req, res, next) => {
  const movieId = req.params.movieId
  const results = movieDetails.find( movie => movie.id === movieId);
  res.json({
    results
  });
})

module.exports = router;

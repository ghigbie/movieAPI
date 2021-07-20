const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');

const requireSearchQuery = (req, res, next) => {
  const searchTerm = req.query.query;
  const results = movieData.filter(movie => {
    let found = movie.overview.inlcudes(searchTerm)
  })
  !searchTerm && res.json({ message: 'Query is required'});
  next();
}

const searchMovieTerms = (searchTerm) => {
  const notFoundMessage = 'A movie matching this criteria could not be found';
  return movieData.filter(movie => movie.overview.inlcudes(searchTerm) || movie.title.includes(searchTerm) || notFoundMessage);
}

router.use(requireSearchQuery); //will be used by all routes in this router

router.get('/movie', (req, res, next) => {
  const results = searchMovieTerms(req.query.query);
  res.json({ results });
});

router.get('/person', (req, res, next) => {
  const results = searchMovieTerms(req.query.query);
  res.json({ results });
});


module.exports = router;
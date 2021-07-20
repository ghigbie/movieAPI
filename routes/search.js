const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');

const NOTFOUND = 'A movie matching this search criteria could not be found';

const requireSearchQuery = (req, res, next) => {
  const searchTerm = req.query.query;
  const results = movieData.filter(movie => {
    let found = movie.overview.inlcudes(searchTerm)
  })
  !searchTerm && res.json({ message: 'Query is required'});
  next();
}

router.use(requireSearchQuery); //will be used by all routes in this router

router.get('/movie', (req, res, next) => {
  const searchTerm = req.query.query.toLowerCase();
  const results = movieData.filter(({overview, title}) => 
    overview.toLowerCase().includes(searchTerm) || title.toLowerCase().inlcudes(searchTerm) || NOTFOUND);
  res.json({ results });
});

router.get('/person', (req, res, next) => {
  const searchTerm = req.query.query.toLowerCase();
  const results = movieData.filter(({name}) => name.toLowerCase().includes(searchTerm) || NOTFOUND );
  res.json({ results });
});


module.exports = router;
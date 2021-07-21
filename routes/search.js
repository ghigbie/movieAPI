const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');
const people = require('./../data/people');

const NOTFOUND = 'A movie matching this search criteria could not be found';

const requireSearchQuery = (req, res, next) => {
  const searchTerm = req.query.query;
  !searchTerm && res.json({ message: 'Query is required'});
  next();
}

router.use(requireSearchQuery); //will be used by all routes in this router

router.get('/movie', (req, res, next) => {
  const searchTerm = req.query.query.toLowerCase();
  let results = movieData.filter(({overview, title}) => {
    const found = overview.toLowerCase().includes(searchTerm) || title.toLowerCase().includes(searchTerm) 
    return found;
  });
  results = results.length === 0 ? NOTFOUND : results;
  res.json({ results });
});

router.get('/person', (req, res, next) => {
  const searchTerm = req.query.query.toLowerCase();
  let results = people.filter(({name}) => {
    const found = name.toLowerCase().includes(searchTerm);
    return found.length === 0 ? NOTFOUND : found;
  });
  results = results.length === 0 ? NOTFOUND : results;
  res.json({ results });
});


module.exports = router;
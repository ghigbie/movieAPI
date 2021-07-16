const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Root' });
});

router.get('/most_popular', (req, res, next) => {
  const results = movies.map( movie => movie.popularity > 4)
  res.json({
    movies: results
  });
});

module.exports = router;

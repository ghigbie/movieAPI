const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');


/* GET home page. */
router.get('/', (req, res, next) => {
  const searchTerm = 'Toy'
  const filteredMovies = movieData.map( movie => {
   return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ? movie : null;
  });

  res.json({ 
    title: 'Search',
    data: filteredMovies,
  });
});

module.exports = router;
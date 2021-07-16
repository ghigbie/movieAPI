const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');


/* GET home page. */
router.post('/', (req, res, next) => {
  const searchQuery = 'Toy';
  const filteredMovies = movieData.map( movie => {
   return movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ? movie : null;
  });

  res.json({ 
    title: 'Search',
    data: filteredMovies,
  });
});

module.exports = router;
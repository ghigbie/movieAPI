const express = require('express');
const router = express.Router();
const movieData = require('./../data/movies');

const requireSearchQuery = (req, res, next) => {
  const searchTerm = req.query.query;
  !searchTerm && res.json({ message: 'Query is required'});
  next();
}

router.use(requireSearchQuery); //will be used by all routes in this router

router.get('/movie', (req, res, next) => {
  res.json({
    tes: "test movie response"
  })
});

router.get('/person', (req, res, next) => {
  res.json({
    tes: "test person response"
  })
});


module.exports = router;
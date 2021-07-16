const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Root' });
});

router.get('/most_popular', (req, res, next) => {
  const page = req.query.page || 0;
  console.log('PAGE: ', page);
  if(req.query.api_key !== '123456789'){ //could use string conversion here
    res.json({message: "Invalid API key"});
  }else{
    let results = movies.filter( movie => movie.most_popular);
    /* This  below usage of slice looks complicated, but the first number can be 0 and the second number can always result in 19 more than the first number */
    const indexToStart = (page-1)*20;
    results = results.slice(indexToStart, indexToStart +19);
    res.json({
      page,
      results
    });
}
});

module.exports = router;

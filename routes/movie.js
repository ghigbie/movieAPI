const express = require('express');
const router = express.Router();
const movieDetails = require('./../data/movieDetails');
// needed routes
// GET / movie /top_rated

//POST /movie/{movie_id}/rating

// DELETE /movie/{movie_id}/rating

const requireJSON = (req, res, next) => {
  const message = 'Content type must be "application/json"';
  !req.is('application/json') && res.json({message});
  next();
}

router.param(('movieId'), (req, res, next) =>{
  //this runs whenever someone hits a route with movieID param
  console.log('movieId param used in route');
  
  next();
})

router.get('/top_rated', (req, res, next) => {
  const page = req.query.page || 0; //if there's a page then use the value in the page 
  let results = movieDetails.sort( (a, b) => b.vote_average - a.vote_average);
    /* This  below usage of slice looks complicated, but the first number can be 0 and the second number can always result in 19 more than the first number */
  const indexToStart = (page-1)*20;
  results = results.slice(indexToStart, indexToStart + 19); //we are slicing the results
  res.json({
    results
  })
});

router.get('/:movieId', (req, res, next) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find( movie => movie.id === Number(movieId));
  results ? 
  res.json({
    results
  })
  :
  res.json({
    message: 'No results found'
  })
});


router.post('/:movieId/rating', requireJSON, (req, res, next) => {
  const movieId = req.params.movieId;
  const userRating = Number(req.body.value);
  console.log(req.body);
  console.log('User Rating: ', userRating);
  if(!userRating || userRating <= .49 || userRating >= 10.1){
    res.json({
      message: 'Please enter a user rating between .5 and 10'
    });
  }else{
    //update a database here
    res.json({ 
      statusCode: 200,
      message: 'Thank you for submitting your rating'
    });
  }
})


module.exports = router;

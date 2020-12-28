var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  res.render('index', {multiplied: req.multiplied}); // gives access to the multiplied property set in app.js. This 'multiplied' key will hold a value when the index.pug template renders (since h1 is equal to that)
});


module.exports = router;
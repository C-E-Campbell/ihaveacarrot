var express = require('express');
var router = express.Router();

// define the home page route
router.post('/login', function (req, res) {
  const { email, user, password } = req.body;
  console.log(req.body);
  res.send('logged in');
});
// define the about route
router.post('/register', function (req, res) {
  const { email, user, password } = req.body;
  console.log(req.body);
  res.send('registered');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res) => {
   res.send('WELCOME TO WALMART NODE EXPRESS APPLICATION !');
});

router.get('/health', (req, res) => {
   res.json({"status":"UP"});
});

module.exports = router;

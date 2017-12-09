var express = require('express');
var router = express.Router();

// Get registrer
router.get('/registrer', function(req, res){
	res.render('registrer');
});

// Get login
router.get('/login', function(req, res){
	res.render('login');
});


module.exports = router;
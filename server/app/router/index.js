const router = require('express').Router();
const usuario = require('./usuario');
const msj = require('./msj');
const voting = require('./voting');
const auth = require('./auth');


// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();	//Sigue corriendo en las siguientes rutas
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

router.use(usuario);
router.use(msj);
router.use(voting);
router.use(auth);

// FUNCTIONS FOR TRAINEDS

module.exports = router;

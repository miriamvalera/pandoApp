// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const http = require('http');

const router = require('./app/router');
const db = require('./app/database');

const app = express();
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080; // set our port

const server = http.createServer(app);


io = require("socket.io")(server);//conectamos (canal de entrada sea el mismo). Carga el websoket io y conecta con el servidor

io.of('/mensajes').on("connection", processMessages);//creando dos canales -- función de callback



function processMessages (socket) {//en cada uno de los canales modo broadcast
	socket.on('msj', function(data) {
		console.log('msj:',data);
		socket.broadcast.emit('msj',data)
	});
}


//CORS middleware
const allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Method');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};
app.use(cors());
app.use(allowCrossDomain);

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// INIT DATABASE -------------------------------
db.initDb(function (err) { console.log('Error connecting db:', err) });

// ROUTES -------------------------------
app.use('/api', router);

// PUBLIC DIR -------------------------------
app.use(express.static(__dirname + "/public"));

// START THE SERVER
// =============================================================================
server.listen(port);

console.log('Welcome to the server on port ' + port);

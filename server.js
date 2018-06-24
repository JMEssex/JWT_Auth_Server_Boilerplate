// Main starting point of the application
const express			= require('express'),
			http				= require('http'),
			bodyParser	= require('body-parser'),
			morgan			= require('morgan');

// create express app
const app = express();

/***** APP SETUP *****/



/***** SERVER SETUP *****/
const port		= process.env.PORT || 3090,
			server	= http.createServer(app);

// listen on port variable
server.listen(port, () => {
	const msg = `Server listening on port ${port}.`
	const bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
});

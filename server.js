// Main starting point of the application
const express			= require('express'),
			http				= require('http'),
			bodyParser	= require('body-parser'),
			morgan			= require('morgan');
			router			= require('./router'),
			mongoose		= require('mongoose');

/***** DB SETUP *****/
mongoose.connect('mongodb://localhost:27017/auth');

// create express app
const app = express();

/***** APP SETUP *****/
// special Middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

/***** SERVER SETUP *****/
const port		= process.env.PORT || 3090,
			server	= http.createServer(app);

// listen on port variable
server.listen(port, () => {
	const msg = `Server listening on port ${port}.`
	const bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})

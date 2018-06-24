const passport			= require('passport'),
			User					= require('../models/user'),
			config				= require('../config'),
			JwtStrategy		= require('passport-jwt').Strategy,
			ExtractJwt		= require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
	// See if the user ID in the payload exists in our database
	// If it does, call 'done' with that user
	// otherwise, call done without a user object
	User.findById(payload.sub, function (err, user) {
		if (err) { return done(err, false); }

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

// Tell passport to use this strategy
passport.use(jwtLogin);

const User = require('./models/user-model');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if(err) throw err;
                //no error, but no user
                if(!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) throw err;
                    if(result === true){
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    //Stores a cookie inside of the browser keeping track of the user returned above
    //cb = callback
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })
    //Takes the above cookie and unravels it to return the user from said cookie
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            cb(err, user);
        });
    });
}
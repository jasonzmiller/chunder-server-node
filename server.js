const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const User = require('./models/user');
//creates the mongoDb
mongoose.connect("mongodb+srv://chunderadmin:justsendit@cluster0.lrrzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, () => {
        console.log("MongoDB User Authenticated");
    }
);
const db = mongoose.connection

//Handles connecting to our mongoDb
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Connection to Mongo Established')
})

//------------------------------------ MIDDLEWARE --------------------------------------//
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(cors({
    origin: 'http://localhost:3000', //<-- Change to whatever the client is
    credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    //pass this to cookie parser
    secret: "chundercode",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('chundercode'));

//init passport
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//------------------------------------ END OF MIDDLEWARE --------------------------------------//



//------------------------------------ ROUTES --------------------------------------//
app.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) throw err;
        if(!user) res.send("No User Exists");
        else {
            req.logIn(user, err => {
                if(err) throw err;
                res.send('Successfully Authenticated!');
                console.log(req.user);
            })
        }
    })(req, res, next);
})
app.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err,doc) => {
      //Checks the db for a user with the username, if exists, returns that it exists.
        //Otherwise, hashes the password and creates the user.
      if(err) throw err;
      if(doc) res.send("User Already Exists");
      if(!doc){
          const hashedPassword= await bcrypt.hash(req.body.password, 10); 
          const newUser = new User({
              username: req.body.username,
              password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
      }
  });
});

app.get('/user', (req, res) => {
    
})


//------------------------------------ END OF ROUTES --------------------------------------//
require('./controllers/trail-controller')(app)

//Placeholder for now, remove line below eventually
app.listen(4000)
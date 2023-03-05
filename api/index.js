const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

require('dotenv').config();

const jwt = require('jsonwebtoken');

const User = require('./models/User');

const cookieParser = require('cookie-parser');

const app = express();

// connecting to database
mongoose.connect(process.env.MONGO_URL);

// grabbing jwt secret from .env file
const jwtSecret = process.env.JWT_SECRET;

const bcryptSalt = bcrypt.genSaltSync(10);

//parsing json from request
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  // grab username and password from request body
  const { username, password } = req.body;
  // create new user
  // try catch is for handling exception when same username gets registered again
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  // grab username and password from request body
  const { username, password } = req.body;
  // find user in database
  const userDoc = await User.findOne({ username });
  // checking password that user entered with password that is stored in database
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  //grab the tokens
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.listen(4000);

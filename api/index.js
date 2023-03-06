const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

require('dotenv').config();

const jwt = require('jsonwebtoken');

const User = require('./models/User');

const Post = require('./models/Post');

const cookieParser = require('cookie-parser');

const multer = require('multer');

const fs = require('fs'); // handling file system used in renaming file

// for uploading files in uploads folder
const uploadMiddleware = multer({ dest: 'uploads/' });

const app = express();

// connecting to database
mongoose.connect(process.env.MONGO_URL);

// grabbing jwt secret from .env file
const jwtSecret = process.env.JWT_SECRET;

const bcryptSalt = bcrypt.genSaltSync(10);

//parsing json from request
app.use(express.json());

app.use(cookieParser());

// for displaying of images
app.use('/uploads', express.static(__dirname + '/uploads'));

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
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      });
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

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  // handling the file name with proper extension
  const { originalname, path } = req.file;

  const parts = originalname.split('.');

  const ext = parts[parts.length - 1];

  // rename the file
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  //grab the tokens
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, info) => {
    if (err) throw err;
    // creation of post
    const { title, summary, content } = req.body;

    const postDoc = await Post.create({
      title,
      summary,
      cover: newPath,
      content,
      // for displaying author name in post
      author: info.id,
    });
    res.json(postDoc);
  });
});

app.get('/post', async (req, res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      // sorting is done to put new post on top
      .sort({ createdAt: -1 })
      // limiting the number of posts to be 20 on home page
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});

app.listen(4000);

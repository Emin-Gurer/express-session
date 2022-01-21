const express = require('express');
const app = express();
const session = require('express-session');

app.use(
  session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/viewcount', (req, res, next) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You have visited this page for ${req.session.count} times`);
});

app.get('/register', (req, res, next) => {
  const { username = 'Anonymous' } = req.query;
  req.session.username = username;
  res.redirect('/greet');
});
app.get('/greet', (req, res, next) => {
  res.send(`Welcome ${req.session.username}`);
});

app.listen(3000, () => {
  console.log('Express app is listening on port 3000');
});

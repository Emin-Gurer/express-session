const express = require('express');
const app = express();
const session = require('express-session');

app.use(
  session({ secret: 'mysecret', resave: false, saveUninitialized: false })
); // This secret should be an environment variable in production

//Sessions is stored in JS memoryStore as default
//This is not reliable in production
//Refer to express-session docs
//If you stop server and restart again data will be lost

app.get('/viewcount', (req, res, next) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You have visited this page for ${req.session.count} times`);
});

app.listen(3000, () => {
  console.log('Express app is listening on port 3000');
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const generateToken = require('./generate-token.js');

const validateTokenMiddleware = function (req, res, next) {
  const authToken = req.header('authorization');
  if (authToken && authToken.length === 16) {
    next();
  } else {
    next(err);
  }
};

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  
  if (email && password && firstName && phone) {
    res.send({ token: generateToken() })
  } else {
    res.send({ message: 'Parâmetros Inválidos'});
  }

});

app.use('/', validateTokenMiddleware);

app.get('/', (req, res) => {
  res.send("Hello world");
});


// if the requested route does not exist
app.use(function(req, res, next) {
  res.status(404).send();
});

// Token Error or Invalid
app.use(function (err, req, res, next) {
  res.status(401).send({ message: 'Token inválido!' });
});

app.listen(3000);
const express = require('express');

const router = express.Router();

const generateToken = require('../helpers/generate-token');

const validateEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexEmail.test(email);
}

const validatePassword = (password) => {
  const regexPassword = /^[0-9]{4,8}$/;
  return regexPassword.test(password);
}

router.post('/', function (req, res) {
  const { email, senha } = req.body;
  if (validateEmail(email) && validatePassword(senha)) {
    res.send({ token: generateToken(6) });
  } else {
    throw new Error('LOGIN ERROR: Email or Password invalid.');
  }
});

module.exports = router;
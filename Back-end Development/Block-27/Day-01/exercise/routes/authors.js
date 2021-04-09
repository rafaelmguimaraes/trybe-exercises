const express = require('express');

const router = express.Router();

 // const Author = require('../models/mysql/Author'); //MYSQL
 const Author = require('../models/mongodb/Author');

 router.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const author = await Author.findById(id);
  console.log(author);
  if (!author) return res.status(404).json({ message: 'Not found' });
  
  res.status(200).json(author);
});

router.post('/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  
  if (!Author.isValid(first_name, middle_name, last_name)) {
  return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  await Author.create(first_name, middle_name, last_name);
  
  res.status(201).send({ message: 'Autor criado com sucesso! '});
});

module.exports = router;

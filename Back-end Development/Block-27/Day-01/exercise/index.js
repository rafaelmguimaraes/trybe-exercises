const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/authors', routes.authors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

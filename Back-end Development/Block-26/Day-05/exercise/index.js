const express = require('express');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
      message: 'Hello Trybers'
  })
});

app.use(express.json());
app.use('/login', routes.login);

app.use(middlewares.errorMiddleware);

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
}); 
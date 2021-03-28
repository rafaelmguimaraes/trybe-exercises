const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Aqui o body-parser entra convertendo o body para JSON
app.use(bodyParser.json()); 

/* app.use é utilizado para registrar um middleware */
/* Nesse caso, toda vez que um request for recebido, vamos logar o método HTTP e o caminho */
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path}`)
  /* Termina a operação no middleware e chama o próximo middleware ou rota */
  next();
});

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get(
  '/ping',
  function (req, res, next) {
    console.log('fiz alguma coisa');
    /* Chama a próxima callback */
    next();
  },
  function (req, res) {
    /* A segunda (e última) callback envia a resposta para o cliente */
    res.send('pong!');
  }
);

/* :id vira um atributo dentro do objeto params,
  que por sua vez está dentro do objeto req */
app.get('/api/people/:id', function (req, res) {
  res.send(req.params.id);
});

/* Qualquer rota que tem o padrão de terminar com "be".
  Exemplo: trybe, wannabe, letitbe */
app.get(/.*be$/, function (req, res) {
  res.send('/.*be$/');
});

app.get('/hello', (req, res) => {
  const name = req.query.name;

  res.status(200)
    .json({ message: `Hello, ${name}` });
});

app.post('/test/post/json', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
});

const requestTimeMiddleware = function (req, res, next) {
  /* Modificamos o objeto req, adicionando o campo requestTime */
  req.requestTime = Date.now();
  /* Chamamos a próxima função */
  next();
};

/* Registramos nosso middleware */
app.use(requestTimeMiddleware);

app.get('/test/time', function (req, res) {
  const responseText = `Request feito às ${req.requestTime}`;
  res.send(responseText);
});

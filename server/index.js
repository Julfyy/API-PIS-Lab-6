const app = require('express')();
const server = require('http').createServer(app);

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/is-92-026', (req, res) => {
  res.send('<h1>Bohdan Shybetskyi IS-92</h1>');
});

server.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

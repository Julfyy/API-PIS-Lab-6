const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/is-92-026', (req, res) => {
  res.sendFile('student-response.html', {
    root: path.join(__dirname, './public/'),
  });
});

server.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

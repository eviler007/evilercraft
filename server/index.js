// const history = require('connect-history-api-fallback');
// const express = require('express');

// const app = express();
// app.use('/', history());
const http = require('http');
const host = 'eviler.top';
const port = '8080';

const app = http.createServer((req, res) => {
  if (req.url === '/test') {
    res.write('index');
    res.end();
  }
});

app.listen(port, () => {
  console.log(`服务器运行在http://${host}:${port}`);
});
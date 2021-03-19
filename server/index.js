const http = require('http');
const httpPort = 80;

const proxy = http.createServer((req, res) => {
  res.end();
});
proxy.listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort);
  const options = {
    port: httpPort,
    host: 'localhost',
    method: 'CONNECT',
    path: 'localhost:' + httpPort
  };
  const req = http.request(options);
  req.end();
});
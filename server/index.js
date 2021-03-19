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

  req.on('connect', (res, socket) => {
    console.log('已连接');

    // 通过 HTTP 隧道发出请求。
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: nodejs.cn:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });
});
console.log('Hello World!');
http = require('node:http');

listener = function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h2 style="style-align:center;">Hello World</h2>');
};

Server = http.createServer(listener);
Server.listen(3001);
console.log('server is running ong http://127.0.0.1:3001');

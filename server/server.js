const http = require('http');
const path = require('path');
const fs = require('fs');

function filePathTracker(filePath, res) {
  fs.readFile(filePath,'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 Internal Server Error');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
}
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url==='/index') {
    filePathTracker(path.join(__dirname, '../index.html'), res);
  }
  else if (req.url === '/about') {
     filePathTracker(path.join(__dirname, '../about.html'),res);
   
  }
  else {
    res.end('404 Not Found');
  }
})



server.listen('1111', '127.0.0.1', () => {
  console.log('server is running at 127.0.0.1:1234/');
})
  

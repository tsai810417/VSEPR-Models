// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080;

app.use(express.static('./'))
app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})

// var http = require("http");
// var fs = require("fs");

// fs.readFile('./index.html', function (err, html)
// {
//     if (err) throw err;
//
//     http.createServer(function (request,response)
//     {
//         // serve site
//         if (request.url === "/")
//         {
//             response.writeHeader(200, {"Content-Type": "text/html"});
//             response.write(html);
//         }
//         response.end();
//     }).listen(process.env.PORT || 3000)
// });

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

var http = require("http");
var fs = require("fs");

fs.readFile('./index.html', function (err, html)
{
    if (err) throw err;

    http.createServer(function (request,response)
    {
        // serve site
        if (request.url === "/")
        {
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
        }
        response.end();
    }).listen(process.env.PORT || 3000)
});
});

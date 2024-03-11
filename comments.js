// Create web server

var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
).listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');
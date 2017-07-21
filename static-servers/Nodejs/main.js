var http = require('http');
//fs library allows for read/write files, make/delete directories...
var fs = require('fs');
var path = require('path');


//var port = '8080';
//Now can enter the port to anything you want when running
//node[0], main.js[1], 8080[2]  <--- this is on index 2
var port = process.argv[2];

var pages = {
    '/': 'index.html',
    '/about': 'about.html',
    '/hello': 'hello.html'
};



http.createServer(function(request, response) {
    function handleHTTP(path) {
        fs.readFile(path, function(error, data) {
            //Handle error
            if (error) {
                return console.error(error);
            }
            //200 means no errors
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    }
    if (pages[request.url] !== undefined) {
        handleHTTP(pages[request.url]);
    } else {
        //404 means not found
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404- Page not found');
    }
}).listen(port);

console.log('running on port: ', port);
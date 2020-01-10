var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('new request arrived.');
    if (req.url == '/') {
        res.write("welcome Home");
        res.end();
    }
    if (req.url == '/contacts') {
        if (req.method == 'GET') {
            res.write('Contacts information');
            res.end();
        }
    }
    if (req.url == '/users') {
        if (req.method == 'GET') {
            res.write('users information');
            res.end();
        }
    }
})

server.listen(3000, function () {
    console.log('Server started on 3000');
})
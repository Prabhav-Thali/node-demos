var express = require('express');
var app = new express();

app.get('/', function (req, res) {
    //res.send('welcome to my application');
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/contacts', function (req, resp) {
    res.send('Contact info');
})

app.get('/users', function (req, res) {
    res.send('Users Data');
})

//ques4
//404 errors
//app.get('/*') --if using this then it needs to be added at the end always.
app.use(function (req, res) {
    res.status(404).send('Please enter correct URL');
})

app.use(function (err, req, res, next) {
    res.status(501).send('Internal Server error');
})

app.listen(3000, function () {
    console.log('Express Server listening on 3000');

})
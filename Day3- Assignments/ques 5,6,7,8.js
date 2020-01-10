var express = require('express');
var app = new express();
app.set('view engine', 'ejs');// extension .ejs of files can be skipped.
app.use(express.urlencoded({ extended: true })) //use any one bodyparser or express

users = [{ name: 'ABC', age: 45 }, { name: 'XYZ', age: 70 }];

app.get('/', function (req, res) {
    res.render('index', { name: 'ABC', userArray: users });// looks for views in views folder
})

app.get('/adduser', function (req, res) {
    res.render('AddUser.ejs');
})

app.post('/adduser', function (req, res) {
    //read the input values
    var obj = new Object();
    obj.name = req.body.name;
    obj.age = req.body.age;
    users.push(obj);
    res.redirect('/');
    //Add it to the array
})

app.listen(3000, function () {
    console.log('Express Server listening on 3000');

})
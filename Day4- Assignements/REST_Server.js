var express = require('express');
var app = new express();
var mongoose = require('mongoose');
var user = require('./model/user');
var router = express.Router();
app.use(express.urlencoded({ extended: true })) //use any one bodyparser or express

mongoose.connect('mongodb://localhost:27017/user_db');

router.route('/users')
    .get(function (req, res) {
        //res.json(users);
        //Fetch records from db
        // {}--> blank select all records
        // {name:'James'}-->select by condition
        user.find({}, function (err, usersArray) {
            if (err)
                res.err('DB error');
            else
                res.json(usersArray);
        });
    }).post(function (req, res) {
        //Read the request input values
        var new_user = new user();
        new_user.name = req.body.name;
        new_user.age = req.body.age;
        new_user.save(function (err) {
            if (err)
                res.send("Error while saving");
            else
                res.send("New record added");
        })
    })

router.use('/user/:name', function (req, res, next) {
    //common code that runs before the appr methods
    user.findOne({ name: req.params.name }, function (err, userObj) {
        if (err)
            res.send('Error in fetching user');
        else
            if (userObj) {
                res.user = userObj;
                next();
            } else
                res.status(404).send("user not found with name " + req.params.name);

    })
})

router.route('/user/:name')
    .get(function (req, res) {
        res.send(res.user);
    }).put(function (req, res) {
        res.user.updateOne({ age: req.body.age }, function (err) {
            res.json("user udpated");
        })
    }).delete(function (req, res) {
        res.user.deleteOne(function (err) {
            res.json("user deleted");
        })
    })
app.use('/api', router);
app.listen(3000, function () {
    console.log('Express Server listening on 3000');

})
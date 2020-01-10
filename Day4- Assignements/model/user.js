var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({name:String,age:Number});
var user= mongoose.model('User', userSchema,'users');
module.exports=user;
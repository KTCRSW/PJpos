const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: String,
    email:String,
    password:String

}, {timestamps : true})

module.exports = mongoose.model('users', usersSchema)
require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://admin_db_user:dactQ30W7vB4BFtN@cluster001.qxstwe4.mongodb.net/"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}
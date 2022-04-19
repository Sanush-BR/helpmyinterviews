const mongoose = require('mongoose');
const config = require('config');

module.exports = function(){

    const db = config.get('db');
    console.log(db);
    mongoose.connect(db)
    .then(() => { console.log(`Connected to ${db}....`)})
    .catch(err => console.error('Unable to connect to Mongo-DB....'));
}
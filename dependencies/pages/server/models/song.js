const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const songSchema = new Schema({
    name:String,
    autor: String,
    logo : String,
    text: String,
    akordy: String
});

module.exports= mongoose.model('Song', songSchema);






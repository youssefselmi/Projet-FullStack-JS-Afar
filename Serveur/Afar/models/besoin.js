const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Besoin = new Schema({
    Name: String,
    Email: String,
    Besoinrecherche: String
});
module.exports = mongoose.model('besoins', Besoin);

    
const mongoose = require('mongoose');
require('./piece');

var Schema = mongoose.Schema;
var Composant = new Schema({
    Name: String,
    Etat: String,
    Marque: String,
    Description: String,
    Image: String,
    Prix: Number,
    Livraison: String
});
module.exports = mongoose.model('composants', Composant);


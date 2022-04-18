const mongoose = require('mongoose'); 

var Schema = mongoose.Schema ; 
var serviceSchema = new mongoose.Schema({
    type:String,
    title:String,
    maxPart : Number,
    description : String,
    governorate :String,
     city: String,
     zipcode : Number,
     disponibility : String
     
       
}); 

module.exports = mongoose.model('service',serviceSchema);
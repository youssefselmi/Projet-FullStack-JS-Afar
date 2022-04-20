const mongoose = require('mongoose'); 



Schema = mongoose.Schema ; 
var Livreur = new Schema ({
   
    nom :String,        
    prenom:  String,       
    num:  Number, 
    addr: String,   
    region: String,
   type : String,
    modele:String , 
     picture : String,
    email: String,  
    age:Number,
    disponibilite:String, 
   password : String,
   signaler:Number

}); 

module.exports = mongoose.model('livreur',Livreur);


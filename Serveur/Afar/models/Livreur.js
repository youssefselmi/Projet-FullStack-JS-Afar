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
   password : String

}); 

module.exports = mongoose.model('livreur',Livreur);


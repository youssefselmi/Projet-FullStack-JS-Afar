
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        
        //validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
        type: String,
        trim: true,
        

        
       
        //validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    email: {
        type: String,
        trim: true,
        unique : true,
       
        //validate: [validateLocalStrategyProperty, 'Please fill in your email'],
         
    },
    password: {
        type: String,
        required:true,
         
        //validate: [validateLocalStrategyPassword, 'Password should be longer']
    },
    accountState: {
        type : [{
            type : String,
            enum : [ 'Active', 'Banned']
        }],
        default : ['Active']
    },
    roles: {
        type: [{
            type: String,
            enum: ['user','premiumUser', 'Admin']
        }],
        default: ['user']
    },
     
     
    /*profilepic:{
        type: String
    }*/
});

 
  


  

  module.exports = mongoose.model("User", UserSchema);
  
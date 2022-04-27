
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const recoveryTokenSchema = new mongoose.Schema({
    
owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
        
       
    },
    token :{
        type : String,
        required : true
    },
    CreatedAt:{
        type : Date,
        expires : 3600,
        default : Date.now()
    }
   
});

recoveryTokenSchema.pre("save",async function(next){
    if(this.isModified("token")){
        const hash = await bcrypt.hash(this.token, 8)
        this.token = hash;
    }
    next();
})
 
  recoveryTokenSchema.methods.compareToken = async function(token){
      const result = await bcrypt.compareSync(token,this.token);
      return result;
  }


  

  module.exports = mongoose.model("recoveryToken", recoveryTokenSchema);
  
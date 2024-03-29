const mongoose = require('mongoose'); 
  
const userSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        require: true
    }, 
    email: { 
        type: String, 
        require: true,
        unique: true
    }, 
    image:{
        type:String
    },
    password:{
        type: String,
        require:true
    }
},{ timestamps: true } ) 
  
module.exports = mongoose.model("users", userSchema)



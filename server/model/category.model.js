

  const mongoose = require('mongoose'); 
  
  const categorySchema = new mongoose.Schema({ 
      title: { 
          type: String, 
          require: true,
          unique:true
      },
      img:{
          type:String
      }
  },{ timestamps: true } ) 
    
  module.exports = mongoose.model("category", categorySchema)
  
  
  
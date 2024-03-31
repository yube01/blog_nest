const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({

  desc: { type: String },
  username :{type:String},

  posts: { type: String },

  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  post: { type: Schema.Types.ObjectId, ref: 'Posts' }
},{ timestamps: true });

const Comment = mongoose.model('Comments', commentSchema);

module.exports = Comment;

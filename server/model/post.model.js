const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  slug:{type:String,unique:true},
  title: { type: String },
  desc: { type: String },
  img: { type: String },
  views: { type: Number, default: 0 },
  catSlug: { type: String },
  cat: { type: Schema.Types.ObjectId, ref: 'Categories' },
  userEmail: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
},{ timestamps: true });

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;

var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  avatar: String,
  postName: String,
  time: {type: Date, default: Date.now()},
  image: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;

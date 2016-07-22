var Post = require('../models/Posts'),
      dest = '/uploads/';

exports.index = function(req, res) {
  Post.find({}, function(err, posts){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(posts);
    }
  });
};

exports.create = function(req, res) {
  var imageUrl = dest + req.file.originalname;

  var post = new Post({postName: req.body.postName, image: imageUrl});

  post.save(function(err, newPost){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(post);
    }
  })
};

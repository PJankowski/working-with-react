'use strict';

var multer = require('multer'),
      PostsController = require('./controllers/PostController');

var diskStorage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({storage: diskStorage});

module.exports = function(app) {
  app.get('/api/posts', PostsController.index);
  app.post('/api/post', upload.single('image'), PostsController.create);

  app.get('/*', function(req, res){
    res.sendFile('../public/index.html');
  });
};

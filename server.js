var express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      mongoose = require('mongoose'),
      app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/photogram', function(err){
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

require('./server/routes')(app);

app.listen('8080', function(){
  console.log('Serving on port 8080');
});

exports = module.exports = app;

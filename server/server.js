 // set up ========================
var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config files
var db = require('./config/database.js');

// Port
app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/portfolio');

// routes
app.get('index.html', function(req, res) {
  res.type('text/plain')
  res.send("Michael Washburn's Portfolio")
})

// listen (start app with node server.js) ======================================
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});



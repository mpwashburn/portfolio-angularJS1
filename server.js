 // set up ========================
var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config files
var db = require('./server/config/database.js');

// Port
app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/portfolio');

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes
require('./server/routes')(app);

app.get('./public/index.html', function(req, res) {
  res.type('text/plain')
  res.send("Michael Washburn's Portfolio")
})

// listen (start app with node server.js) ======================================
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});



var Project = require('./models/project-model');

module.exports = (function(app) {

  // server routes
  // handle things like api calls
  // authentification routes
  // sample api route
  app.get('/api/portfolio', function(req, res) {
    Project.find(function(err, portfolio) {
      if (err)
        res.send(err);
      res.json(portfolio);
    });
  });

   // frontend routes
   // route to handle all angular requests
   app.get('*', function(req, res) {
      res.sendFile(__dirname + 'public/index.html');
   });
});

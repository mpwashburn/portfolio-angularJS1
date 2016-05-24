var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
  title : String,
  imageUrl : String,
  languages : [{type : String, default: ''}],
  description: String
});

module.exports = mongoose.model('Projects',  projectsSchema);

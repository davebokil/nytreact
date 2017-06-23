// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

// Create the Model
var Article = mongoose.model("Article", ArticleSchema);

// Export it for use elsewhere
module.exports = Article;

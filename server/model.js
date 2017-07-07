var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String
  },
  gunType: {
    type: String
  },
  description: {
    type: String
  },
  range: {
    type: String
  },
  user: {
    type: String
  },

});

var Posts = mongoose.model("Post", PostSchema);
module.exports = Posts;

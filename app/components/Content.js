// Include React
var React = require("react");
var Gunposts = require("./server/model");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Content = React.createClass({
  render: function() {
    return {
    	<div className="jumbotron">
      	<h1>GunPosts.Posts</h1>
      	<p>Welcome to friendly fire</p>
      </div>
  }
}
});

// Export the component back for use in other files
module.exports = Content;

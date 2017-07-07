// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Content = require("./components/Content");

ReactDOM.render(

  // Here we deploy the header component as though it were any other HTML element
  <Content />,
  document.getElementById("app")
);

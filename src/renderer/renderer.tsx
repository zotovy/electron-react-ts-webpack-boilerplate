import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// Import the styles here to process them with webpack
import '@public/style.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

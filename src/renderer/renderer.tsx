import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// Import the styles here to process them with webpack
import '@public/style.css';

ReactDOM.render(
  <React.Fragment>
    <h1>Thank you for using my template!😊</h1>
    <a href="https://github.com/zotovY/electron-react-ts-webpack-boilerplate">This template was clone from <a id="author">@zotovY</a> repository</a>
  </React.Fragment>,
  document.getElementById('app')
);

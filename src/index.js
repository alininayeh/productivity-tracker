import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

serviceWorker.register();

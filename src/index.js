import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

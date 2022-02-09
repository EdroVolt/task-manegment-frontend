import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./component/App.jsx";
import store from "./redux/store.js";

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

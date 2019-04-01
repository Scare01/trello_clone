import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";

// redux
import store from "./redux/store/store";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.ui.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

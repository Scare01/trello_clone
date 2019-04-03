import React from "react";
import { render } from "react-dom";
import "./index.css";
import AppHeader from "./components/header";

//router
import { BrowserRouter, Route } from "react-router-dom";

// redux
import store from "./redux/store/store";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.min.css";

import HomePage from "./components/homePage";
import AddBoardForm from "./components/addBoardForm";
import OneBoard from "./components/boards/board";

render(
  <BrowserRouter>
    <Provider store={store}>
      <AppHeader />
      <div id="mainContent">
        <div id="tasks">
          <Route exact path="/" component={HomePage} />
          <Route path="/addBoard" component={AddBoardForm} />
          <Route path="/board/:board" component={OneBoard} />
        </div>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

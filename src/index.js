import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import { CustomRouter } from "./routing/CustomRouter";
import { YScroll } from "./routing/YScroll";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CustomRouter>
    <YScroll>
      <App />
    </YScroll>
  </CustomRouter>,
  rootElement
);

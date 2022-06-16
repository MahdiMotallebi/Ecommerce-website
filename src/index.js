import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-bootstrap-submenu/dist/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "aos/dist/aos.css";

import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./mainStyle/main.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

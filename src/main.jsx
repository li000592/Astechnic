import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./colorTheme.css";
import "./assets/index.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {/* <ScrollToTop /> */}
    </HashRouter>
  </React.StrictMode>
);

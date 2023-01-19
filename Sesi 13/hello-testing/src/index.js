import React from "react";
import "./styles/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
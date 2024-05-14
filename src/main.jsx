import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import Router from "./Router";
import { Provider } from "jotai";
import axios from "axios";
import "./index.css";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.params = {};
axios.defaults.params["password"] = "test1234";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "";
axios.get("sanctum/csrf-cookie");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);

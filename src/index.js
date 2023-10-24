import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import Router from "./Router";
import "./output.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

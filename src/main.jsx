import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./configurations/router.jsx";
import { setupStore } from "./configurations/store.js";

const store = setupStore();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

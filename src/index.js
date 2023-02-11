import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import Axios from "axios";
Axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.clear();
    }
    if (err.response.status === 400) {
      return Promise.reject({
        errorType: "fieldError",
        error: err.response.data,
      });
    }
    return Promise.reject(err.response);
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import jobListReducer from "./reducer/jobListReducer";
import currentFilterReducer from "./reducer/currentFilterReducer";

const store = configureStore({
  reducer: {
    jobList: jobListReducer,
    currentFilter: currentFilterReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

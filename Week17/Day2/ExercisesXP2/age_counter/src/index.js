import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import { age_reducer } from "./redux/reducers";
import { logAction } from "./redux/middlewares";

const store = createStore(age_reducer, applyMiddleware(logAction));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

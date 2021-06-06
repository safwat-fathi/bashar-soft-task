import React from "react";
import ReactDOM from "react-dom";
// Base styles
import "./index.scss";
// App component
import App from "./App";
// redux
import { Provider } from "react-redux";
import { fetchJobs } from "./redux/slices/jobs.slice";
import store from "./redux/store";

store.dispatch(fetchJobs());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

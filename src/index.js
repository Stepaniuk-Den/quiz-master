// import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter basename="/quiz-master">
    <App />
  </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//<React.StrictMode>

// <BrowserRouter basename="/CarRent">
//   <App />
// </BrowserRouter>

//</React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

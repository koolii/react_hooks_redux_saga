import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import counterReducer, { initialState } from "./reducer";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./styles/semantic.min.css";

const store = createStore(counterReducer, initialState);

// <BrowserRouter>を使うと、これより下の階層でHTML5のHistoryAPIを
// 利用した機能が使えるようになる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

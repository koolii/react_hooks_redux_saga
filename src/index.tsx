import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import reducer from "./reducer";
import rootSaga from "./sagas/github";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./styles/semantic.min.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// <BrowserRouter>を使うと、これより下の階層でHTML5のHistoryAPIを
// 利用した機能が使えるようになる
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// sagaの監視スレッドを起動する
sagaMiddleware.run(rootSaga);

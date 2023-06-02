require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom/client";
import App  from "./App";
import { Provider } from 'react-redux'
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
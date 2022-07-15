import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const feelingReducer = (state = 0, action) => {
  if (action.type === "SET_FEELING") {
    console.log("in feelingReducer", action);
    state = action.payload;
  }
  return state;
};

const understandingReducer = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    console.log("in understandingReducer", action);
    state = action.payload;
  }
  return state;
};

const supportedReducer = (state = 0, action) => {
  if (action.type === "SET_SUPPORTED") {
    console.log("in supportedReducer", action);
    state = action.payload;
  }
  return state;
};

const commentReducer = (state = "", action) => {
  if (action.type === "SET_COMMENT") {
    console.log("in commentsReducer", action);
    state = action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentReducer,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

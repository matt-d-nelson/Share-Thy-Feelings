//---------------------Imports---------------------//

// functional libraries
import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// styling libraries
import "./index.css";

// components
import App from "./components/App/App";

//---------------------Reducers---------------------//

// declare reducer function and initialize state value
const feelingReducer = (state = 0, action) => {
  // check dispatched action types and update state accordingly
  if (action.type === "SET_FEELING") {
    console.log("in feelingReducer", action);
    state = action.payload;
  }
  if (action.type === "INITIALIZE") {
    console.log("in feelingReducer", action);
    state = 0;
  }
  return state;
};

const understandingReducer = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    console.log("in understandingReducer", action);
    state = action.payload;
  }
  if (action.type === "INITIALIZE") {
    state = 0;
  }
  return state;
};

const supportedReducer = (state = 0, action) => {
  if (action.type === "SET_SUPPORTED") {
    console.log("in supportedReducer", action);
    state = action.payload;
  }
  if (action.type === "INITIALIZE") {
    state = 0;
  }
  return state;
};

const commentReducer = (state = "", action) => {
  if (action.type === "SET_COMMENT") {
    console.log("in commentsReducer", action);
    state = action.payload;
  }
  if (action.type === "INITIALIZE") {
    state = "";
  }
  return state;
};

// create store to hold this app's state tree
const store = createStore(
  // use combineReducers to create a single root reducer from many to send dispatches to
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentReducer,
  })
);

//---------------------VirtDOM---------------------//

// wrap App in a Provider component with the created store as a prop so the state tree is available to the entire app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

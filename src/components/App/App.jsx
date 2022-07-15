// libraries
import React from "react";
import { Route, HashRouter } from "react-router-dom";

// styling
import "./App.css";

// component inports
import Header from "../Header/Header";
import TextInput from "../TextInput/TextInput";
import RadioInput from "../RadioInput/RadioInput";
import FeedbackHome from "../FeedbackHome/FeedbackHome";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import Success from "../Success/Success";

// component data
const feeling = {
  title: "How are you feeling today",
  name: "feeling",
  action: "SET_FEELING",
  next: "/understanding",
  previous: "/",
  reducer: "feelingReducer",
};

const understanding = {
  title: "How well are you understanding the content?",
  name: "understanding",
  action: "SET_UNDERSTANDING",
  next: "/supported",
  previous: "/feeling",
  reducer: "understandingReducer",
};

const supported = {
  title: "How well are you being supported?",
  name: "supported",
  action: "SET_SUPPORTED",
  next: "/comment",
  previous: "/understanding",
  reducer: "supportedReducer",
};

const comment = {
  title: "Any comments you want to leave?",
  action: "SET_COMMENT",
  next: "/review",
  previous: "/supported",
  reducer: "commentReducer",
};

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Route path="/" exact>
          <FeedbackHome />
        </Route>
        <Route path="/feeling">
          <RadioInput data={feeling} />
        </Route>
        <Route path="/understanding">
          <RadioInput data={understanding} />
        </Route>
        <Route path="/supported">
          <RadioInput data={supported} />
        </Route>
        <Route path="/comment">
          <TextInput data={comment} />
        </Route>
        <Route path="/review">
          <ReviewFeedback />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;

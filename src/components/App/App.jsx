// libraries
import React from "react";
import { Route, HashRouter } from "react-router-dom";

// styling
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

// component inports
import Header from "../Header/Header";
import TextInput from "../TextInput/TextInput";
import RadioInput from "../RadioInput/RadioInput";
import FeedbackHome from "../FeedbackHome/FeedbackHome";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import Success from "../Success/Success";
import Admin from "../Admin/Admin";

// component data
import componentData from "./componentData";

// Material UI custom theme
const theme = createTheme({
  typography: {
    fontFamily: "blackchancery",
    allVariants: { color: "#300000" },
    button: {
      textTransform: "none",
    },
  },
  palette: { primary: { main: "#300000" } },
});

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route path="/" exact>
            <FeedbackHome />
          </Route>
          <Route path="/feeling">
            <RadioInput data={componentData.feeling} />
          </Route>
          <Route path="/understanding">
            <RadioInput data={componentData.understanding} />
          </Route>
          <Route path="/supported">
            <RadioInput data={componentData.supported} />
          </Route>
          <Route path="/comment">
            <TextInput data={componentData.comment} />
          </Route>
          <Route path="/review">
            <ReviewFeedback />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

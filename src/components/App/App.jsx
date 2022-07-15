//---------------------Imports---------------------//

// functional libraries
import React from "react";
import { Route, HashRouter } from "react-router-dom";

// styling libraries
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

// components
import Header from "../Header/Header";
import TextInput from "../TextInput/TextInput";
import RadioInput from "../RadioInput/RadioInput";
import FeedbackHome from "../FeedbackHome/FeedbackHome";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import Success from "../Success/Success";
import Admin from "../Admin/Admin";

// component data
import componentData from "./componentData";

//---------------------Styling---------------------//

// Material UI custom theme
const theme = createTheme({
  // overwrite default values for text in MUI components
  typography: {
    // use custom font stored in /public/fonts
    fontFamily: "blackchancery",
    // use custom color
    allVariants: { color: "#300000" },
    // overwrite button textTransform so that button labels aren't all caps
    button: {
      textTransform: "none",
    },
  },
  // set a custom palette color
  palette: { primary: { main: "#300000" } },
});

//---------------------Virt DOM---------------------//

function App() {
  // Header component is located outside of HashRouter so that it always displays on DOM
  // ThemeProvider component wraps the components that it should apply to / provide created theme as a prop
  // Routes are supplied with path attribute to define on what url they should display
  // RadioInput and TextInput components are provided a data prop that imports an object from /src/components/App/componentData.js
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

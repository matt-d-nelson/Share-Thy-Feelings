//---------------------Imports---------------------//
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import "./Header.css";

// small scope theme for testing
const theme = createTheme({
  typography: {
    fontFamily: "blackchancery",
  },
});

//---------------------Virt DOM---------------------//

function Header(props) {
  return (
    <div className="App-header">
      <div className="App-title">
        <ThemeProvider theme={theme}>
          <Typography variant="h2">Share Thy Feelings</Typography>
          <Typography variant="h4">Thou shan't forget it!</Typography>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;

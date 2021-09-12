import React from "react";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";

import GlobalStyles from "styles/GlobalStyles";
import { theme } from "styles/theme";

import Home from "Pages/Home";

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;

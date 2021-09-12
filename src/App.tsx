import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";

import GlobalStyles from "styles/GlobalStyles";
import { theme } from "styles/theme";

import Home from "Pages/Home";

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default App;

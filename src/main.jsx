import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";
import GlobalStyles from "./styles/globalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);

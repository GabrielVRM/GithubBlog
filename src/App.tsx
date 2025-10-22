import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ContextProvider } from "./context/api";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ContextProvider>
            <Header />
            <Router />
          </ContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

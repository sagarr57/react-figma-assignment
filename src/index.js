import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ProductContextProvider } from "./context/ProductContext";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#194266",
    },
    secondary: {
      main: "#17D1B6",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

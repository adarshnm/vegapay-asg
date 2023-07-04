import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./containers";
import "./index.css";
import store from "./store/store.ts";
import { Provider } from "react-redux";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#131430",
    },
    secondary: {
      main: "#4BA4F8",
    },
    background: {
      default: "#eceff3",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "none",
            backgroundColor: "#5683f7",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#5683f7",
            },
          },
        },
      ],
    },
  },
};

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

import { useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = createContext();

function getTheme() {
  let theme = "";
  if (localStorage) {
    theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  }
}

const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState(() => getTheme());

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        let newTheme = mode === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          ...(mode === "dark" && {
            background: {
              default: "#202c37",
              paper: "#2b3945",
            },
          }),
          ...(mode === "light" && {
            background: {
              default: "#fafafa",
              paper: "#fff",
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: "#111517",
                  secondary: "#858585",
                }
              : {
                  primary: "#ffffff",
                  // secondary: ''
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext, ThemeContext };

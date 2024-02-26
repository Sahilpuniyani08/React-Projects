import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "./Layout";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";


// Define your light and dark themes
const lightTheme = createTheme({
    palette: {
      mode: "light",
      // Define your light theme colors here
      primary: {
        main: "#fff",
        text: "black",
        yellow: "#f6a62c",
        navtext: "#33373d",
      },
  
      background: {
        default: "#fcfcfc",
        paper: "#f5f5f5",
        textField: "#F4F4F4",
        divider: "#eee",
      },
    },
    typography: {
      fontFamily: ["Monda", "sans-serif"].join(","),
    },
  });
  
   const darkTheme = createTheme({
    palette: {
      mode: "dark",
      // Define your dark theme colors here
      primary: {
        main: "#191919",
        text: "rgba(255, 255, 255, 0.87)",
        yellow: "#f6a62c",
        navtext: "#ccc",
      },
  
      background: {
        default: "#000",
        paper: "#191919",
        textField: "#202020",
        divider: "#444444",
      },
    },
    typography: {
      fontFamily: ["Monda", "sans-serif"].join(","),
    },
  });

const Router = () => {
  // Get theme mode from localStorage or default to 'light'
  const storedThemeMode = localStorage.getItem("themeMode");
  const [themeMode, setThemeMode] = useState(storedThemeMode || "dark");

  // Update localStorage when theme mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          element={
            <Layout toggleTheme={toggleTheme} themeMode={themeMode} />
          }
        >
          <Route index element={<Home />} />
          <Route path="/post/:id" element={<BlogPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
import React, { useState } from 'react';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from "@mui/material/CssBaseline";
import Header from './components/header/Header'

import { Outlet } from 'react-router'
import Services from './components/Services';
import { lightGreen } from '@mui/material/colors';
import { Box, Toolbar } from '@mui/material';
import { useTheme } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {

  return (
    <BrowserRouter>
    <Router />
  </BrowserRouter>
  )
}

export default App

import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import { useTheme } from '@emotion/react';
import Services from './components/Services';
import BottomHeader from './components/BottomHeader';

function Layout({toggleTheme, themeMode}) {
 const theme = useTheme();

  return (
    <Box sx={{display:"flex"}}>
    <CssBaseline />
        <Header mode={themeMode} changeMode={toggleTheme} />
        <Box
        component="main"
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.primary.text,
          p: 3,
          mt: { xs: 5, lg: 15 },
          width: "100%",
        }}
      >
     <Services />
     <Toolbar />
        {<Outlet />}
      </Box>
       {/* Bottom header */}
       <BottomHeader />
    </Box>
  )
}

export default Layout

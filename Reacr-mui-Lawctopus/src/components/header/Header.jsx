import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Call from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import SideBar from './SideBar';
import { useTheme } from '@emotion/react';
import SearchInput from '../SearchInput';
import CustomButton from '../CustomButton';





export default function Header({mode,changeMode}) {
 
const theme = useTheme();
  return (
  <AppBar
  elevation={0}
  position="fixed"
  color="primary"
  sx={{
        height: "100px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: `0.1px solid ${theme.palette.background.divider}`,
  }}
  >
    <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
    <div style={{ display: "flex", alignItems: "center" }}>
    <SideBar  mode={mode}>
    <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
    </SideBar>
           
            <Typography variant="h6" flexWrap={"wrap"} component="div">
              <img
                src={
                  mode === "dark"
                    ? "https://www.lawctopus.com/wp-content/uploads/2022/01/law-wh-tg.png"
                    : "https://www.lawctopus.com/wp-content/uploads/2022/01/Lawctopus-logo-footer.svg"
                }
                alt="sksks"
                height={"50px"}
                width={"150px"}
              />
            </Typography>
          </div>
          <Box gap={3} sx={{ display: { xs: "none", lg: "flex" } }}>
            <SearchInput />
            <CustomButton title="Contact" icon={<Call />} variant={"text"} />
            <CustomButton title="Submit Posts" variant="contained" />
            <CustomButton title="LLS Courses" variant="outlined" />
          </Box>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={changeMode}
              sx={{ ml: 2 }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </div>
        </Toolbar>
  </AppBar>
  );
}

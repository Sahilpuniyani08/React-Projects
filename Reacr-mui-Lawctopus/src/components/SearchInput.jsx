import { useTheme } from '@emotion/react'
import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function SearchInput() {
    const theme = useTheme();
  return (
    <Paper
    sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "40vw",
        backgroundColor: theme.palette.background.textField,
        borderRadius: "10px",
        boxShadow: "none",
    }}
    elevation={6}
    >
    <InputBase  sx={{ ml: 1, flex: 1 }} placeholder='Search in lawctopus...'/>
    <Divider sx={{ height: 30 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput

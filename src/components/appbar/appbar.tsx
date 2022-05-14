import React from 'react'
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu } from '@mui/icons-material'

const AppBar: React.VFC = () => {
  return (
    <Box>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            arial-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            AppBar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}

export default AppBar

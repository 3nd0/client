import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Send } from '@mui/icons-material'

const Drawer: React.VFC = () => {
  return (
    <List
      sx={{ width: '100%', maxwidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
          <Send />
          <ListItemText primary="send mail" />
        </ListItemIcon>
      </ListItemButton>
    </List>
  )
}

export default Drawer

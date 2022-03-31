import React from 'react'
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  ListItem,
} from '@mui/material'
import { Summarize } from '@mui/icons-material'

const Drawer: React.VFC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'Background.paper' }}>
      <List component="nav" aria-label="list">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Summarize />
            </ListItemIcon>
            <ListItemText primary="週報" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Drawer

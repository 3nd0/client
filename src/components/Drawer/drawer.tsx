import React from 'react'
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  ListItem,
} from '@mui/material'
import { AccessTime, DirectionsTransit, Summarize } from '@mui/icons-material'

const Drawer: React.VFC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 250, bgcolor: 'Background.paper' }}>
      <List component="nav" aria-label="list">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Summarize />
            </ListItemIcon>
            <ListItemText primary="週報" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary="タイムカード" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DirectionsTransit />
            </ListItemIcon>
            <ListItemText primary="交通費" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Drawer

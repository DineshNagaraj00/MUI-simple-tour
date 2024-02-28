import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpIcon from '@mui/icons-material/Help';
import Place from '@mui/icons-material/Place';
import ListIcon from '@mui/icons-material/List';

function Menu() {
  
  return (
    <Box flex={1} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position='fixed'>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AirplanemodeActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Plan Your Trip" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon  />
            </ListItemIcon>
            <ListItemText primary="Things to do" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExploreIcon/>
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListIcon/>
            </ListItemIcon>
            <ListItemText primary="Facts" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Place/>
            </ListItemIcon>
            <ListItemText primary="Places" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExploreIcon/>
            </ListItemIcon>
            <ListItemText primary="Tickets" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon/>
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}

export default Menu;

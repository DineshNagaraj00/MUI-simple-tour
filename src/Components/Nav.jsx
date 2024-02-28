import React from 'react'
import { AppBar, Avatar, Badge, Box, Toolbar, Typography  } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Nav.css'
import styled from '@emotion/styled';

const StyleToolBar= styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  margin:'0'
});


function Nav() {
  return (
 <AppBar position='sticky'>
    <StyleToolBar className='tool'>
        <Typography variant='h5'> Travel </Typography>
        <Box sx={{display:'flex', alignItems:'center',gap:'30px'}}>
          <Badge badgeContent={3} color='secondary' className='mail'><MailOutlineIcon/></Badge>
          <Badge badgeContent={5} color='secondary' className='mail'><NotificationsNoneIcon/></Badge>
          <Avatar alt='Remy Sharp' src='https://images.pexels.com/photos/15550504/pexels-photo-15550504/free-photo-of-black-and-white-portrait-of-a-teenage-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Box  >
    </StyleToolBar>
 </AppBar>
  )
}

export default Nav
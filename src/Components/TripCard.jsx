import { Avatar, Card, CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

function TripCard() {
 
  return (
    <Card sx={{ maxWidth: 600, marginBottom:'20px' }}>
      <CardHeader
       
        title="A perfect Holiday Spot"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Rating
  name="simple-controlled"
  value={4}
/>
      </CardActions>
    
    </Card>
  )
}

export default TripCard
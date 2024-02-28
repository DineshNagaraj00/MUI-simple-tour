import  {Box, Card}  from '@mui/material'
import React from 'react'
import TripCard from './TripCard'

function Content() {
  return (
    <Box flex={2} padding={3} >
      <TripCard/>
      <TripCard/>
      <TripCard/>
    </Box>
  )
}

export default Content
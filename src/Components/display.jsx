import React from 'react'
import { Box, Avatar, Typography} from '@mui/material'
import Empty from '../assets/images/illustration-empty.svg'



const Display = () => {
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Avatar 
        src={Empty} 
        sx={{
          height: '170px', 
          width: '170px', 
          marginBottom: '20px'  // Add some space between Avatar and Typography
        }}
      />
      <Typography 
        variant='h5' 
        sx={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '0.5rem',
          fontWeight: 'bold'
        }}
      >
        Results shown here
      </Typography>
      <Typography 
        variant='body2' 
        sx={{
          color: 'hsl(200, 24%, 40%)',
          textAlign: 'center'
        }}
      >
        Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.
      </Typography>
      
    </Box>
  )
}

export default Display
import React from 'react'
import {Box, Typography, Container, Divider} from '@mui/material'

const Result = ({data}) => {
  const {amount, term, rate, type} = data || {}  
  const numAmount = Number(amount)
  const numTerm = Number(term)
  const numRate = Number(rate)
   
  const monthlyRate = numRate/100/12
  const noOfPayment = numTerm * 12

  let monthlyRepayment = 0
  let totalRepayment = 0

  if(type === 'repayment') {
    monthlyRepayment = (numAmount * monthlyRate * Math.pow(1 + monthlyRate, noOfPayment))/(Math.pow(1 + monthlyRate, noOfPayment) - 1)
    totalRepayment = monthlyRepayment * noOfPayment
}
  else if(type === 'interest') {
    monthlyRepayment = numAmount * monthlyRate
    totalRepayment = (numAmount + monthlyRepayment * noOfPayment) 
  }
  

  
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4.5rem 2rem',
        height: '100%',
    }}>
        <Typography align='left' variant='h5' sx={{
            fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', 
        }}>Your results</Typography>
        <Typography align='left' variant='body2' sx={{
             color: 'hsl(200, 24%, 40%)', 
        }}>Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</Typography>
  <Container sx={{
          height: '300px', width: '470px', borderTop: '4px solid hsl(61, 70%, 52%)', marginTop: '3.5rem', backgroundColor: 'hsl(201, 56.90%, 12.70%)',
          padding: '2.5rem 2rem'
        }}>
              <Typography align='left' variant='body2' sx={ {
                color: 'hsl(200, 24%, 40%)'
              }}>Your monthly repayments</Typography>
              <Typography align='left' variant='h2' sx={{
                color: 'hsl(61, 70%, 52%)', margin: '1.5rem 0'
              }}>{monthlyRepayment.toFixed(2)}</Typography>
              <Divider  sx={{
                backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.18)'
              }} />
              <Typography gutterBottom align='left' variant='body2' sx={{
                color: 'hsl(200, 24%, 40%)', marginTop: '1.5rem', 
              }}>
              Total you'll repay over the term
              </Typography>
              <Typography align='left' variant='h5' sx={{
                color: 'white'
              }}>
              {totalRepayment.toFixed(2)}
              </Typography>
        </Container>
    </Box>

  )
}

export default Result
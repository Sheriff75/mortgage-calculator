import { TextField, Typography, Button, Grid2, InputAdornment, Box, RadioGroup, Radio, FormControlLabel, Avatar, FormHelperText } from '@mui/material'
import React, { useState } from 'react'
import CalculatorSvg from '../assets/images/icon-calculator.svg'
const First = ({onCalculate}) => {
    const [amount, setAmount] = useState('')
    const [amountError, setAmountError] = useState('')
    const [term, setTerm] = useState('')
    const [termError, setTermError] = useState('')
    const [rate, setRate] = useState('')
    const [rateError, setRateError] = useState('')
    const [type, setType] = useState('')
    const [typeError, setTypeError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    
        setAmountError('')
        setTermError('')
        setRateError('')
        setTypeError('')
    if(!amount) {
        setAmountError('Please enter an amount')
    }
    if(!term) {
        setTermError('Please enter a term')
    }
    if(!rate) {
        setRateError('Please enter a rate')
    }
    if(!type) {
        setTypeError('Please select a type')
    }

    if(amountError|| termError || rateError || typeError) {
        return
    }
    const formData = {amount, rate, term, type}
    onCalculate(formData)
    
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    const handleRateChange = (e) => {
        setRate(e.target.value)
    }
    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleClear = () => {
        setAmount('')
        setTerm('')
        setRate('')
        setType('')
    }



  return (
    <Box>
    <Grid2 container  sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2.5rem',
    }}>
        <Grid2 >
            <Typography align='left' variant='h5' sx={{fontWeight: 'bold',
                fontSize: {
                    xs: '1.25rem',  
                    md: '1.75rem',
                }, color: 'hsl(202, 55%, 16%)'
            }}>Mortgage Calculator</Typography>
        </Grid2>
        <Grid2 size = {{xs: 12, md: 4,}} sx={{textAlign: { 
        xs: 'left',  
        md: 'right', 
    }
    }}>
        <Button onClick={handleClear}
            align='right' variant='text' sx={{
            textDecoration: 'underline',
            textDecorationColor: 'hsl(200, 24%, 40%)',
            cursor: 'pointer',
            textTransform: 'none',     
            color: 'hsl(200, 24%, 40%)',
            fontSize: {
                xs: '0.8rem',
                md: '1.1rem',
            }
        }} >Clear All</Button>
        </Grid2>
        <Grid2 size = {{xs: 12, md: 12}} sx={{
            marginTop: '3rem', marginBottom: '1.5rem'
        }}>
        <Typography gutterBottom align='left' sx = {{
            color: 'hsl(200, 24%, 40%)',fontSize: {
                xs: '0.8rem',
                md: '1.1rem',
            }
        }}>Mortgage Amount</Typography>
        <TextField type='number' value = {amount} error = {!!amountError} onChange = {handleAmountChange} id = 'amount ' size='small' variant='outlined' sx={{width: '100%',
        border: '0.16rem solid hsl(203, 41%, 72%)',
        borderRadius: '0.28rem',

            '& .MuiOutlinedInput-root': {
                paddingLeft: 0,
            },
            '&:focus-within': {
                borderColor: 'hsl(61, 70%, 52%)'
            },
            '& .MuiOutlinedInput-notchedOutline' : {
                border: 'hsl(61, 70%, 52%)',
            },
            
        }} 
        InputProps={{startAdornment: <InputAdornment position='start' sx={{
            backgroundColor: 'hsl(202, 86%, 94%)',
            height: '100%',
            maxHeight: 'none',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            paddingLeft: '14px',
            paddingRight: '14px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginRight: '8px',
        }}>€</InputAdornment>}}
        />
        <FormHelperText sx={{color: 'rgb(209, 25, 25)',  marginLeft: '1px'}}>{amountError}</FormHelperText>
        </Grid2>
        <Grid2 size = {{xs: 12, md: 5}} sx={{
             marginBottom: '1.5rem'
        }}>
        <Typography gutterBottom align='left' sx = {{
            color: 'hsl(200, 24%, 40%)',fontSize: {
                xs: '0.8rem',
                md: '1.1rem',
            }
        }}>Mortgage Term</Typography>
        <TextField type='number' value = {term} error = {!!termError}  onChange = {handleTermChange} id = 'term ' size='small' variant='outlined' sx={{width: '100%',
        border: '0.16rem solid hsl(203, 41%, 72%)',
        borderRadius: '0.28rem',

            '& .MuiOutlinedInput-root': {
                paddingLeft: 0,
            },
            '&:focus-within': {
                borderColor: 'hsl(61, 70%, 52%)'
            },
            '& .MuiOutlinedInput-notchedOutline' : {
                border: 'hsl(61, 70%, 52%)',
            },
            
        }} 
        InputProps={{endAdornment: <InputAdornment position='end' sx={{
            backgroundColor: 'hsl(202, 86%, 94%)',
            height: '100%',
            maxHeight: 'none',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginRight: '-15px',
        }}>years</InputAdornment>}}
        />
        <FormHelperText sx={{color: 'rgb(209, 25, 25)',  marginLeft: '1px'}}>{termError}</FormHelperText>
        </Grid2>
        <Grid2 size = {{xs: 12, md: 5}} sx={{
            marginBottom: '1.5rem'
        }}>
        <Typography gutterBottom align='left' sx = {{
            color: 'hsl(200, 24%, 40%)',fontSize: {
                xs: '0.8rem',
                md: '1.1rem',
            }, 
        }}>Interest Rate</Typography>
        <TextField type='number' value = {rate} error = {!!rateError}  onChange = {handleRateChange} id = 'rate' size='small' variant='outlined' sx={{width: '100%',
        border: '0.16rem solid hsl(203, 41%, 72%)',
        borderRadius: '0.28rem',

            '& .MuiOutlinedInput-root': {
                paddingLeft: 0,
            },
            '&:focus-within': {
                borderColor: 'hsl(61, 70%, 52%)'
            },
            '& .MuiOutlinedInput-notchedOutline' : {
                border: 'hsl(61, 70%, 52%)',
            },
            
        }} 
        InputProps={{endAdornment: <InputAdornment position='end' sx={{
            backgroundColor: 'hsl(202, 86%, 94%)',
            height: '100%',
            maxHeight: 'none',
            paddingLeft: '14px',
            paddingRight: '14px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginRight: '-14px',
        }}>%</InputAdornment>}}
        />
        <FormHelperText sx={{color: 'rgb(209, 25, 25)',  marginLeft: '1px'}}>{rateError}</FormHelperText>
        </Grid2>
        <Grid2 size = {{xs: 12, md: 12}}>
            <Typography gutterBottom align='left' sx = {{
            color: 'hsl(200, 24%, 40%)',fontSize: {
                xs: '0.8rem',
                md: '1.1rem',
            }
            }} >Mortgage Type</Typography>
            <RadioGroup
            value={type}
            onChange={handleTypeChange}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group">
            <FormControlLabel  sx={{padding: '0', margin: '0', width: '100%',borderRadius: '0.28rem', border: '0.16rem solid hsl(203, 41%, 72%)', '&. Mui-checked': {
               '& + MuiFormControlLabel-label': {     
               color: 'red'},
               border: '0.16rem solid hsl(61, 70%, 52%)', borderRadius: '0.28rem'
            } ,marginBottom: '1rem',}} value="repayment" control={<Radio sx={{color: 'hsl(203, 41%, 72%)',  '&.Mui-checked': {
                color: 'hsl(61, 70%, 52%)',}
            }} />} label="Repayment" />

            <FormControlLabel sx={{padding: '0', margin: '0', width: '100%',border: '0.16rem solid hsl(203, 41%, 72%)',borderRadius: '0.28rem','&. Mui-checked': {
                border:  '1px solid hsl(61, 70%, 52%)', borderRadius: '0.28rem',
            } }} value="interest" control={<Radio sx={{
                color: 'hsl(203, 41%, 72%)',
                '&:hover': {color: 'hsl(61, 70%, 52%)'},
                '&.Mui-checked': {
                    color: 'hsl(61, 70%, 52%)',},
                                       '&. Mui-focused:not(.Mui-checked)': {color: 'hsl(203, 41%, 72%)'},
                    '&.Mui-checked:not(.Mui-focused)': {color: 'hsl(61, 70%, 52%)'}
            }}/>} label="Interest Only" />
            </RadioGroup>
    </Grid2>
    {typeError && <Typography align='left' color= 'rgb(209, 25, 25)' variant='caption'>{typeError}</Typography>}
    <Grid2 size = {{xs: 12, md: 12}} sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
        
    }}>
        
        <Button variant='contained' onClick={handleSubmit}
        startIcon = {<Avatar src={CalculatorSvg}  sx={{height: '25px', width : '25px',}}/>}
        sx={{backgroundColor: 'hsl(61, 70%, 52%)',marginTop: '2rem',  borderRadius: '20px', padding: '10px 40px', color: 'hsl(202, 55%, 16%)', fontWeight: 'bold', textTransform: 'none',}}>
            Calculate Repayments
        </Button>
    </Grid2>
    </Grid2>
    </Box>
  )
}

export default First
import { Button } from '@mui/base';
import { Box, TextField, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react'

const Usememopractise = () => {
    const [number,setNumber]=useState(1);
    const[answer,setAnswer]=useState(null)
     const memoizedvalue=useMemo(()=>{
        const calculateFactorial=(num)=>{
            let ans=1;
            for (let i=1;i<=number;i++){
              ans *=i;
            }
            setAnswer(ans);
          }
         return  calculateFactorial(number)
     },[number])
    const Factorial=()=>{
        setAnswer(memoizedvalue)
    } 

  return (
   <>
     <Box
     marginTop={5}
     textAlign={'center'}
   
     >
        <Typography marginBottom={5} variant='h5'>Enter  a Number for Calculate factorial</Typography>
     <TextField inputProps={{ min: 1, max: 50 }} type='number' name='number' placeholder='enter a number for factorial' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
     <Typography variant='h3'>{answer}</Typography>
     
         <button onClick={Factorial}>calculate factorial</button>
     </Box>
   </>
  )
}

export default Usememopractise
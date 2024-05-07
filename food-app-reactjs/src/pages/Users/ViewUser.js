import { Typography,Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
  const {id}=useParams();
  const { users} = useSelector(state => state.userReducers)
  const [user,setUser]=useState()
  useEffect(()=>{
    if (id){
       if (users.length){
        const data=users.find((val)=>val._id ===id)
        setUser(data)
       }
    }
  },[id,users])
  console.log(user)
  return (
       <>
        <Box textAlign={'center'}> <Typography variant='h1'>{user?.name} Details</Typography></Box>
      <Box
      margin={4}
      padding={4}
       textAlign={'center'}
      >
          
      
      <Typography variant='h4'>Email: {user?.email}</Typography>
      <Typography variant='h4'>Occupation: {user?.occupation}</Typography>
      <Typography variant='h4'>Phone Number: {user?.phoneNumber}</Typography>
      <Typography variant='h4'>City: {user?.city}</Typography>
      <Typography variant='h4'>Created At: {user?.createdAt}</Typography>
      <Typography variant='h4'>Updated At: {user?.updatedAt}</Typography>
        <Box marginTop={5} textAlign={"center"}>
        <Link to={'/users'}> <Button  type='button' size='medium' color='secondary' variant='contained'>Back to Table</Button></Link>
        </Box>
      </Box>
       </>
  )
}

export default ViewUser
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {deleteItem} from '../components/reduxStore/formAction';
import { toast } from 'react-toastify';


const UserTable = () => {
  const navigate =useNavigate();
    const rows=useSelector((state)=>state?.users)
     const dispatch=useDispatch()

   
   const handleDelete=(index)=>{
    dispatch(deleteItem(index))
    toast.success("delete data successfuly")
   }
  

  return (
    <>
     <Link to={'/adduser'}> <Button sx={{marginTop:5}} type='button' variant='contained' size='medium' >Add Users</Button></Link>
        {rows.length ? <>
          <TableContainer sx={{ minWidth: 450 , marginTop:5} } component={Paper}>
      <Table   aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">s. no</TableCell>
          <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row,index) => (
            <TableRow
              key={row?.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align="center">{index+1}</TableCell>
             <TableCell align="center">{row?.firstName}</TableCell>
              <TableCell align="center">{row?.lastName}</TableCell>
              <TableCell align="center">{row?.email}</TableCell>
              <TableCell align="center">{row?.password}</TableCell>
              <TableCell align="center">{row?.address}</TableCell>
              <TableCell align="center">
              <Box
              fullWidth
              sx={{
                display: "flex",
                padding: 2,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
                <Button type="button" variant="contained" size="medium" onClick={() => navigate(`/updateuser/${row.id}`)}>Edit</Button>
                <Button type="button" variant="contained" size="medium" onClick={()=>handleDelete(index)}>Delete</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></> :<Typography textAlign={'center'} variant='h4'>No Data Found</Typography>}
    </>
  )
}

export default UserTable
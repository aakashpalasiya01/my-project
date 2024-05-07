import React from "react";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({ rows,handleDelete,handleEdit }) => {
  return (

    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
    maxWidth={1000}
  >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">S.no</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{row?.firstName}</TableCell>
              <TableCell align="right">{row?.lastName}</TableCell>
              <TableCell align="right">{row?.email}</TableCell>
              <TableCell align="right">{row?.password}</TableCell>
              <TableCell align="right">{row?.dateOfBirth}</TableCell>
              <TableCell align="right">
                <Button onClick={()=>{handleDelete(row.id)}} type="button" sx={{marginRight:4}} size="medium" color="primary" variant="contained">Delete</Button>
                <Button onClick={()=>{handleEdit(row.id)}} type="button" size="medium" color="primary" variant="contained">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
    
  );
};

export default UserTable;

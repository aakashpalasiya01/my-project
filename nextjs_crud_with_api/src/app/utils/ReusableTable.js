import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";

const ReusableTable = ({ userData,handleEdit,handleDelete }) => {
  return (
    <>
      {userData.length ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          marginLeft={4}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">S.No</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Password</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right">State</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Occupation</TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user, index) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{user?.name}</TableCell>
                    <TableCell align="right">{user?.email}</TableCell>
                    <TableCell align="right">{user?.password}</TableCell>
                    <TableCell align="right">{user?.city}</TableCell>
                    <TableCell align="right">{user?.state}</TableCell>
                    <TableCell align="right">{user?.country}</TableCell>
                    <TableCell align="right">{user?.occupation}</TableCell>
                    <TableCell align="right">{user?.phoneNumber}</TableCell>
                    <TableCell align="right">
                       <Button sx={{marginRight:5}} onClick={()=>{handleEdit(user._id)}} type="button" variant="contained" size="medium" color="primary">EDIT</Button>
                       <Button onClick={()=>{handleDelete(user._id)}} type="button" variant="contained" size="medium" color="primary">DELETE</Button>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Typography textAlign={"center"} variant="h3">
          No Data{" "}
        </Typography>
      )}
    </>
  );
};

export default ReusableTable;

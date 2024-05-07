import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "./Modal";
import {getAllUsers,deleteUser, updateUser} from '../reduxStore/action'
import { updateData } from "../reduxStore/reducers";
const GetUsers = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userData = useSelector((state) => state.userInfo.users);
   
  const [error, setError] = useState(false);

   function GetData() {
      dispatch(getAllUsers())
  }

  useEffect(() => {
    GetData();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleOpenModal = (userId) => {
    setUserIdToDelete(userId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmDelete = () => {
    if (userIdToDelete) {
      deleteUserdata(userIdToDelete);
    }
    handleCloseModal();
  };
  const deleteUserdata = (userIdToDelete) => {
    
    dispatch(deleteUser(userIdToDelete)).then(()=>{
      toast.success("User Deleted Successfully")
      dispatch(getAllUsers())
    }).catch(()=>{
      toast.error("Something went wrong")
    })

  };
     
  return (
    <>
      <Typography variant="h4" textAlign={"center"}>
        All users List
      </Typography>
      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
      />
      <Box textAlign={"center"} margin={2}>
        <Link to={"/addUsers"}>
          <Button size="small" variant="contained">
            Add New User
          </Button>
        </Link>

        <Typography>Total Users : {userData?.length}</Typography>
      </Box>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: "rgba(96, 96, 96)",
                    backgroundColor: "yellow",
                  },
                }}
              >
                <TableCell align="right">S. NO</TableCell>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">EMAIL</TableCell>
                <TableCell align="right">PASSWORD</TableCell>
                <TableCell align="right">CITY</TableCell>
                <TableCell align="right">STATE</TableCell>
                <TableCell align="right">COUNTRY</TableCell>
                <TableCell align="right">OCCUPATION</TableCell>
                <TableCell align="right">PHONENUMBER</TableCell>

                <TableCell align="right">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.length &&
                userData?.map((user, index) => (
                  <TableRow
                    key={user.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.password}</TableCell>
                    <TableCell align="right">{user.city}</TableCell>
                    <TableCell align="right">{user.state}</TableCell>
                    <TableCell align="right">{user.country}</TableCell>
                    <TableCell align="right">{user.occupation}</TableCell>
                    <TableCell align="right">{user.phoneNumber}</TableCell>

                    <TableBody align="center">
                      <Box textAlign={"center"} marginTop={1} px={4} py={2}>
                       <Link to={`/updateuser/${user._id}`}> <Button  sx={{ margin: "15px" }}
                          
                          size="small"
                          variant="contained"
                        >
                          Edit
                        </Button>
                        </Link>
                        <Button
                          onClick={() => handleOpenModal(user._id)}
                          size="small"
                          variant="contained"
                        >
                          Delete
                        </Button>
                      </Box>
                    </TableBody>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default GetUsers;

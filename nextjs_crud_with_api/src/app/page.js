"use client";
import { useEffect, useState } from "react";
import ReusableTable from "./utils/ReusableTable";
import { Box, Button, Grid, Typography } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mern-admin-backend-jxw3.onrender.com/general/users"
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
// console.log(userData)
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://mern-admin-backend-jxw3.onrender.com/general/user/delete/${id}`
      );
      console.log("User deleted successfully:", response.data);
      toast.success('User Delete Successfuly')
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error('Something Went Wrong')

    }
  };
  const  handleEdit= (id) => {
    router.push(`/editusers/${id}`)
  };
   const handleAddUser=()=>{
    router.push('/addusers')
   }
  return (
    <>
      <Box marginX={5} padding={4}>
        <Typography textAlign={"center"} variant="h4">
          User Table :{userData.length}
        </Typography>
        <Button onClick={handleAddUser} variant="contained">Add User</Button>
      </Box>
      <Grid container justify="center">
        <ReusableTable
          userData={userData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Grid>
    </>
  );
}

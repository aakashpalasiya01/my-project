import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from "./UserForm";

const AddUsers = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
  });
  const defaultForm = {
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
  };



  const handleChange = (e) => {
  const {name,value}=e.target;
  setFormdata({...formdata,[name]:value})
  };
  const clearFormdata=()=>{
    setFormdata(defaultForm)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://mern-admin-backend-jxw3.onrender.com/general/user/add', {
        method: 'POST',
        body: JSON.stringify({
           formdata
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
     })
     .then(response => response.json())
     .then(data => {
       toast.success('user add successfully')
       
        setFormdata(defaultForm); 
       
     })
     .catch(error => {
        console.error('Error:', error);
       
     });
  };
  

  return (
    <>

    
     <Container maxWidth="sm">
        <Box margin={4} padding={4} display={"flex"}  sx={{ bgcolor: '#cfe8fc', height: 'auto' ,width:'auto'}} >
       <UserForm handleSubmit={handleSubmit} formdata={formdata} handleChange={handleChange} clearFormdata={clearFormdata}/>
        </Box>
          <Box textAlign={"center"}>
          <Link to={'/'}><Button  type="button" variant="outlined" size="medium">Go To Main Page</Button></Link>
          </Box>
      </Container>
      
    </>
  );
};

export default AddUsers;

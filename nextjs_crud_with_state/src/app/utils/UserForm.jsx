"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const UserForm = ({formData,handleSubmit,handleOnchange,isEdit}) => {
      const router=useRouter();
  const handlenavigate=()=>{
    router.push('/')
  }
  return (
    <>
        <Typography variant="h4" marginTop={5} textAlign={"center"}>{isEdit ?'Edit User Data':'Add User Data'}</Typography>
     <Box
     display="flex"
     justifyContent="center"
     alignItems="center"
     minHeight="40vh"
     
     >
     <form onSubmit={handleSubmit} >
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            name="firstName"
            onChange={handleOnchange}
            value={formData?.firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            name="lastName"
             onChange={handleOnchange}
            value={formData?.lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          name="email"
          onChange={handleOnchange}
          value={formData?.email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          name="password"
          onChange={handleOnchange}
          value={formData?.password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          variant="outlined"
          color="secondary"
          label="Date of Birth"
          name="dateOfBirth"
          onChange={handleOnchange}
          value={formData?.dateOfBirth}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
          <Box alignItems={"center"}>
          <Button onClick={handlenavigate}  variant="outlined" color="primary" type="submit">
           {isEdit ? 'save':'Add'}
        </Button>
          </Box>
      </form>
     </Box>
     
    </>
  );
};

export default UserForm;

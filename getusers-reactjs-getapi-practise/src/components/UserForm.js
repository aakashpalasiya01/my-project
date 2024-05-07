import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const UserForm = ({handleSubmit,formdata,handleChange,clearFormdata ,isEditdata }) => {
  return (
    <form   onSubmit={handleSubmit}>
    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="name"
      value={formdata.name}
      id="name"
      label="Enter Your Name"
      defaultValue="john"
      onChange={handleChange}
      
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="email"
      name="email"
      value={formdata.email}
      id="email"
      label="Enter Your Email"
      defaultValue="john@gmail.com"
      onChange={handleChange}
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="password"
      name="password"
      value={formdata.password}
      id="password"
      label="Enter Your Password"
      defaultValue="******"
      onChange={handleChange}
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="city"
      value={formdata.city}
      id="city"
      label="Enter Your City"
      defaultValue="indore"
      onChange={handleChange}
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="state"
      value={formdata.state}
      id="state"
      label="Enter Your state"
      defaultValue="madhya pradesh"
      onChange={handleChange}
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="country"
      value={formdata.country}
      id="state"
      label="Enter Your country"
      defaultValue="india"
      onChange={handleChange}
    />

    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="occupation"
      value={formdata.occupation}
      id="occupation"
      label="Enter Your occapation"
      defaultValue="student"
      onChange={handleChange}
    />
    <TextField
     sx={{ margin: "15px" }}
      required
      type="text"
      name="phoneNumber"
      value={formdata.phoneNumber}
      id="phoneNUmber"
      label="Enter Your phoneNumber"
      defaultValue="1231231231"
      onChange={handleChange}
    />
      <Box marginTop={10}  textAlign={"center"}>
      <Button  sx={{ margin: "15px" }} type="submit" variant="contained" size="medium">
        {isEditdata ?'editdata': 'submit'}
    </Button>
    <Button onClick={clearFormdata} variant="contained" size="medium">
      Reset
    </Button>
      </Box>
  </form>
  )
}

export default UserForm
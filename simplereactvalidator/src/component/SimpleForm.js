import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";

const SimpleForm = () => {
  const simpleValidator = useRef(new SimpleReactValidator());
  const DefaultForm = {
    name: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    address: "",
    password: "",
    mobileNumber: "",
  };

  const [userForm, setUserForm] = useState(DefaultForm);
  const [, forceUpdate] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = simpleValidator.current.allValid();
    if (formValid) {
      Swal.fire({
        title: "user data ",
        text: "data submitted successfuly",
        icon: "success",
      });
      setUserForm(DefaultForm);
      return;
    }
    if (!formValid) {
      console.log("form not valid...");
      simpleValidator.current.showMessages();
      forceUpdate(1);
      Swal.fire({
        title: "Error!",
        text: "please fill all details",
        icon: "error",
        // confirmButtonText: ''
      });
      //   setUserForm(DefaultForm);
      return;
    }
  };
  const handleReset = () => {
    setUserForm(DefaultForm);
    Swal.fire({
      title: "form reset",
      text: "all fields are reset successfuly",
      icon: "info",
      // confirmButtonText: ''
    });
  };
  return (
    <Box
      margin={"auto"}
      width={400}
      padding={5}
      height={600}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form onSubmit={handleSubmit}>
        <Typography textAlign={"center"} variant="h5">
          User Form
        </Typography>
        <TextField
          placeholder="Name"
          onChange={handleChange}
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userForm.name}
          onBlur={() => simpleValidator.current.showMessageFor("name")}
        />
        {simpleValidator.current.message("name", userForm.name, "required")}

        <TextField
          name="lastName"
          placeholder="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userForm.lastName}
          onBlur={() => simpleValidator.current.showMessageFor("lastName")}
        />
        {simpleValidator.current.message(
          "lastName",
          userForm.lastName,
          "required"
        )}

        <TextField
          name="email"
          type="email"
          placeholder="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userForm.email}
          onBlur={() => simpleValidator.current.showMessageFor("email")}
        />
        {simpleValidator.current.message("email", userForm.email, "required")}

        <TextField
          type="date"
          name="dateOfBirth"
          placeholder="Date Of Birth"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userForm.dateOfBirth}
          onBlur={() => simpleValidator.current.showMessageFor("dateOfBirth")}
        />
        {simpleValidator.current.message(
          "dateOfBirth",
          userForm.dateOfBirth,
          "required"
        )}

        <TextField
          placeholder="Address"
          name="address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userForm.address}
          onChange={handleChange}
          onBlur={() => simpleValidator.current.showMessageFor("address")}
        />
        {simpleValidator.current.message(
          "address",
          userForm.address,
          "required"
        )}
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userForm.password}
          onBlur={() => simpleValidator.current.showMessageFor("password")}
        />
        {simpleValidator.current.message(
          "password",
          userForm.password,
          "required"
        )}

        <TextField
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={userForm.mobileNumber}
          onBlur={() => simpleValidator.current.showMessageFor("mobileNumber")}
        />
        {simpleValidator.current.message(
          "mobileNumber",
          userForm.mobileNumber,
          "required|exact:10"
        )}

        <Box
          display={"flex"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            onClick={handleReset}
            variant="contained"
            color="warning"
            size="medium"
            type="button"
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SimpleForm;

import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser } from "../reduxStore/action";
import UserForm from "./UserForm";

const UpdateUser = () => {
  const navigate=useNavigate();
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
  const [formdata, setFormdata] = useState(defaultForm);
  const { id } = useParams();
  const { users } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length) {
      let selectedUser = users.find((val) => val._id === id);
      if (selectedUser) {
        setFormdata({
          ...formdata,
          name: selectedUser.name,
          email: selectedUser.email,
          password: selectedUser.password,
          city: selectedUser.city,
          state: selectedUser.state,
          country: selectedUser.country,
          occupation: selectedUser.occupation,
          phoneNumber: selectedUser.phoneNumber,
        });
      }
    } else {
      dispatch(getAllUsers());
    }
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const clearFormdata = () => {
    setFormdata(defaultForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id,formdata))
    toast.success("user update successfuly")
    navigate('/')



    
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          margin={4}
          padding={4}
          display={"flex"}
          sx={{ bgcolor: "#cfe8fc", height: "800px", width: "auto" }}
        >
          <UserForm isEditdata handleSubmit={handleSubmit} formdata={formdata} handleChange={handleChange} clearFormdata={clearFormdata}/>
        </Box>
        <Box  sx={{ margin: "15px" }} textAlign={"center"}>
          <Link to={"/"}>
            <Button type="button" variant="outlined" size="medium">
              Go To Main Page
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default UpdateUser;

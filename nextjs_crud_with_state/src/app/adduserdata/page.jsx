"use client";
import React, { useEffect, useState } from "react";
import UserForm from "../utils/UserForm";
import { toast } from "react-toastify";
import { Box, Button } from "@mui/material";
import Link from "next/link";

const AddUserData = () => {

  const [list, setList] = useState([]);
  const DefaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  };
  const [formData, setFormData] = useState(DefaultForm);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function generateRandomId() {
    const min = 100000; // Minimum 6-digit number (100000)
    const max = 999999; // Maximum 6-digit number (999999)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("userData");
    const existingList = storedData ? JSON.parse(storedData) : [];
    const newList = [...existingList, { ...formData, id: generateRandomId() }];
    localStorage.setItem("userData", JSON.stringify(newList));
    // Update state and reset form data
    setList(newList);
    toast.success("Data added successfully");
    setFormData(DefaultForm);
  };
  

  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        //  minHeight="50vh"
      >
        <UserForm
          handleOnchange={handleOnchange}
          formData={formData}
          handleSubmit={handleSubmit}
        />

      </Box>
    </>
  );
};

export default AddUserData;

"use client";
import React, { useEffect, useState } from "react";
import UserForm from "../../utils/UserForm";
import { toast } from "react-toastify";
import { Box, Button } from "@mui/material";
import Link from "next/link";

// import { useRouter } from "next/navigation";
import { useParams, useRouter } from "next/navigation";

const EditUserData = () => {
  const router=useRouter();
  const DefaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  };
  const { id } = useParams();
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const updatedData = parsedData.find(
        (userData) => userData.id === Number(id)
      );
      setFormData(updatedData);
    }
  }, [id]);
  const [list, setList] = useState([]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const dataIndex = parsedData.findIndex((userData) => userData.id === Number(id));
      if (dataIndex !== -1) {
        // Update the item at the found index
        parsedData[dataIndex] = formData;
        localStorage.setItem("userData", JSON.stringify(parsedData));
         setFormData(DefaultForm);
         toast.success('user edited successfuly')
      }
    }
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
          isEdit
        />

        <Link href="/">Back to home</Link>
      </Box>
    </>
  );
};

export default EditUserData;

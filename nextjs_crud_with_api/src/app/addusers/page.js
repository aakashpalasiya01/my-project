'use client'
import React, { useState } from "react";
import ReusableUserForm from "../utils/ReusableUserForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddUsers = () => {
  const router =useRouter();
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
  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mern-admin-backend-jxw3.onrender.com/general/user/add', formData);
    debugger
      console.log(response)
      toast.success('User Add Successfuly')
    } catch (error) {
      toast.warning('something went wrong')
    
    }
    setFormData(defaultForm)
    router.push('/')
  };
  return (
    <ReusableUserForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default AddUsers;

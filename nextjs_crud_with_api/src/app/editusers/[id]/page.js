"use client";

import React, { useEffect, useState } from "react";
import ReusableUserForm from "../../utils/ReusableUserForm";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mern-admin-backend-jxw3.onrender.com/general/users"
      );

      const updatedata = response.data.find((data) => data._id === id);
      setFormData(updatedata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

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
      await axios.put(
        `https://mern-admin-backend-jxw3.onrender.com/general/user/update/${id}`,
        formData
      );
      fetchData();
      toast.success("User Updated Successfully");
      router.push("/"); 
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
  };
  return (
    <ReusableUserForm
      isEDit
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditUser;

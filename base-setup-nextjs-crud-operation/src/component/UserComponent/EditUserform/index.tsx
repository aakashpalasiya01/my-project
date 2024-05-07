'use client'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import CommanUserForm from '@/shared/comman-user-form';

const EditUserForm = () => {
  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
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
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValid = simpleValidator.current.allValid()
        if (!formValid) {
          simpleValidator.current.showMessages()
          forceUpdate(1)
         } else{
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
          }
   
    };
  return (
      <CommanUserForm handleChange={handleChange} handleSubmit={handleSubmit} isEdit formData={formData} simpleValidator={simpleValidator}/>
  )
}

export default EditUserForm
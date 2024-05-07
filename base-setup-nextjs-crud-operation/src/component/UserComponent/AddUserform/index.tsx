'use client'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import CommanUserForm from '../../../shared/comman-user-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

const AddUserForm = () => {
  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();

  const router=useRouter();
  const DefaultForm={
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: ""
  }
    const [formData, setFormData] = useState(DefaultForm);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValid = simpleValidator.current.allValid()

      
     
        if (!formValid) {
          simpleValidator.current.showMessages()
          forceUpdate(1)
        } else{
          try {
            const response = await axios.post('https://mern-admin-backend-jxw3.onrender.com/general/user/add', formData);
            toast.success('User Added successfuly')
            router.push('/')
          } catch (error) {
            toast.warn('something went wrong')
          }
        }

     
      };
  return (
     <>
       
      <CommanUserForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} simpleValidator={simpleValidator}/>
      
     </>
  )
}

export default AddUserForm
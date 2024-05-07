import React, { useRef, useState } from "react";
import UserForm from "./UserForm";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./reduxStore/formAction";
import { Link, useNavigate } from "react-router-dom";

const AddUsers = () => {
  const dispatch=useDispatch();


  const randomAlphaNumeric = length => {
    let s = '';
    Array.from({ length }).some(() => {
      s += Math.random().toString(36).slice(2);
      return s.length >= length;
    });
    return s.slice(0, length);
  };
  
  const defaultForm = {
 
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    
  };
  const navigate=useNavigate();
  const [, forceUpdate] = useState();
  const simpleValidator = useRef(new SimpleReactValidator())

  const [formData, setformData] = useState(defaultForm);

  const handleChange = (e) => {
    const {name,value}=e.target;
    setformData({...formData,[name]:value})
  };
  const clearForm = () => {
    setformData(defaultForm)
    toast.success('user form Reset successfuly')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (simpleValidator.current.allValid()){
       toast.success('user form submit successfuly')
         dispatch(addItem({...formData,id:randomAlphaNumeric(6)}))
        setformData(defaultForm)
        simpleValidator.visibleFields = [];  
        forceUpdate();  
        navigate('/')

    
    } else{
        simpleValidator.current.showMessages()
        forceUpdate(1);
       
    }

  };
  return (
    <>
       <Box
       display='flex'
        flexDirection={"column"}
       margin={5}
       padding={5}
       >
        <Typography variant="h4" textAlign={"center"}>Add Users</Typography>
         <Box display={"flex"} justifyContent={"center"}>
         <UserForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        clearForm={clearForm}
        formData={formData}
        simpleValidator={simpleValidator}
      />
         </Box>
     
       </Box>
    </>
  );
};

export default AddUsers;

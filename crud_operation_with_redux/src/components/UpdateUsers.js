import React, { useEffect, useRef, useState } from "react";
import UserForm from "./UserForm";
import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "./reduxStore/formAction";

const UpdateUsers = () => {
  const { id } = useParams();
  const [formData, setformData] = useState({});

  const dispatch = useDispatch();

  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  };
  const data = useSelector((state) => state.users);
  useEffect(() => {
    if (id) {
      const userEDitdata = data.find((user) => user.id === id);
      if (userEDitdata) {
        setformData(userEDitdata);
      }
    }
  }, [id]);

  const navigate = useNavigate();
  const [, forceUpdate] = useState();
  const simpleValidator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const clearForm = () => {
    setformData(defaultForm);
    toast.success("user form Reset successfuly");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (simpleValidator.current.allValid()) {
      toast.success("user form submit successfuly");
      dispatch(updateItem(formData));
      setformData(defaultForm);
      simpleValidator.visibleFields = [];
      forceUpdate();
      navigate("/");
    } else {
      simpleValidator.current.showMessages();
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
          <Typography variant="h4" textAlign={"center"}>Edit user </Typography>
          <Box display={"flex"} justifyContent={"center"}>
      <UserForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        clearForm={clearForm}
        formData={formData}
        simpleValidator={simpleValidator}
        isEdit
      />
      </Box>
         </Box>
    </>
  );
};

export default UpdateUsers;

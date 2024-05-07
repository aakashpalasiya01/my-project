import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Container } from "@mui/material";
import moment from "moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "./redux/action/passBookActions";

const Practise = () => {
  const dispatch = useDispatch();
 const defaultForm={
  transactionamount:'',
  transactiontype:'credit',
  remark:"",
  remainingAmount:0
 }
 const [form,setForm]=useState(defaultForm)
  const passbook = useSelector((state) => state.list);
   const [remainingAmount,setRemainingAmount]=useState(0)
  



  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };
  const cleartextfiled = () => {
    setForm(defaultForm)
    toast.info("Reset all details successfuly");
  };
  const handleformdata = (e) => {
    e.preventDefault();
    // const { form, remainingAmount } = passbook;
    if (form?.transactionamount === 0 || form?.remark === "") {
      toast.info("Please Fill All Details");

      return;
    }
    const currentDate = moment().format("MMM Do YY");
     
    const newRemainingAmount =
   
      form?.transactiontype === "credit"
        ? parseInt([passbook?.length-1].remainingAmount) + parseInt(form?.transactionamount) 
        : parseInt([passbook?.length-1].remainingAmount)- parseInt(form?.transactionamount);

      

    if (newRemainingAmount < 0) {
      toast.warning("insufficient amount");

      return;
    }

    const updatedForm = {
      ...form,
      date: currentDate,
      remainingAmount: newRemainingAmount,
    };
     
    dispatch(addItem(updatedForm));
    toast.success(`Amount ${updatedForm.transactiontype} successfuly`);
    
   
  };
  return (
    <>
      <Box
        maxWidth={"sm"}
        margin={"auto"}
        height={400}
        width={800}
        my={4}
        display="flex"
        marginTop={5}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        p={2}
        boxShadow={4}
        sx={{ border: "1px solid grey", borderRadius: "4" }}
      >
        <form onSubmit={handleformdata}>
          <Container maxWidth={"sm"}>
            <Typography variant="h4" align="center" gutterBottom>
              Transaction
            </Typography>{" "}
            <Typography variant="h5">Transaction Amount</Typography>
            <TextField
              fullWidth
              label="Transaction Amount"
              type="number"
              name="transactionamount"
              placeholder="Enter any amount"
              value={form.transactionamount}
              onChange={handlehange}
            />
            <FormControl>
              <Typography variant="h5">Transaction Type</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="transactiontype"
                value={form.transactiontype}
                onChange={handlehange}
                row
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit"
                />
                <FormControlLabel
                  value="debit"
                  control={<Radio />}
                  label="Debit"
                />
              </RadioGroup>
            </FormControl>
            <Typography variant="h5">Remark</Typography>
            <TextField
              fullWidth
              label="Remark"
              multiline
              minRows={3}
              maxRows={5}
              name="remark"
              value={form?.remark}
              onChange={handlehange}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" type="submit">
                Save
              </Button>
              <Button variant="outlined" onClick={cleartextfiled}>
                Reset
              </Button>
            </Box>
          </Container>
        </form>
      </Box>
      <Box textAlign={"center"}>

      <Link to={"/table"}>
        <Button  size="large" variant="contained">Click here to view table</Button>
      </Link>
      </Box>
    </>
  );
};

export default Practise;

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
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import moment from "moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "./redux/action/passBookActions";

const Practise = () => {
  const dispatch = useDispatch();
  const passbook = useSelector((state) => state.list);
  const [form, setForm] = useState({
    transactionamount: '',
    transactiontype: 'credit',
    remark: "",
    remainingAmount: 0
  });
  const [remainingAmount, setRemainingAmount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearTextField = () => {
    setForm({
      transactionamount: '',
      transactiontype: 'credit',
      remark: "",
      remainingAmount: 0
    });
    toast.info("Reset all details successfully");
  };

  const calculateAverage = () => {
    const sum = passbook.reduce((total, entry) => {
      if (entry.transactiontype === 'credit') {
        return total + parseInt(entry.transactionamount);
      }
      return total;
    }, 0);
    return sum / passbook.length;
  };

  const addInterestEntry = () => {
    const average = calculateAverage() * 0.025;
    const currentDate = moment().format("MMM Do YY");
    const interestEntry = {
      transactionamount: average.toFixed(2),
      transactiontype: 'Interest',
      remark: 'Interest',
      remainingAmount,
      date: currentDate
    };
    dispatch(addItem(interestEntry));
    toast.success(`Interest entry added successfully`);
  };

  useEffect(() => {
    if (passbook.length > 0 && passbook.length % 4 === 0) {
      
    
        addInterestEntry();
    }
  }, [passbook]);

  const handleFormData = (e) => {
    e.preventDefault();
    if (!form?.transactionamount || !form?.remark) {
      toast.info("Please Fill All Details");
      return;
    }

    const currentDate = moment().format("MMM Do YY");
    const lastPassbookEntry = passbook[passbook.length - 1] || { remainingAmount: 0 };
    const currentRemainingAmount = lastPassbookEntry.remainingAmount;
    const newRemainingAmount =
      form.transactiontype === "credit"
        ? currentRemainingAmount + parseInt(form.transactionamount)
        : currentRemainingAmount - parseInt(form.transactionamount);

    if (newRemainingAmount < 0) {
      toast.warning("Insufficient amount");
      return;
    }

    setRemainingAmount(newRemainingAmount);
    const updatedForm = {
      ...form,
      date: currentDate,
      remainingAmount: newRemainingAmount,
    };
    dispatch(addItem(updatedForm));
    toast.success(`Amount ${updatedForm.transactiontype} successfully`);
    setForm({
      transactionamount: '',
      transactiontype: 'credit',
      remark: "",
      remainingAmount: newRemainingAmount
    });
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
        <form onSubmit={handleFormData}>
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
              onChange={handleChange}
            />
            <FormControl>
              <Typography variant="h5">Transaction Type</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="transactiontype"
                value={form.transactiontype}
                onChange={handleChange}
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
              onChange={handleChange}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" type="submit">
                Save
              </Button>
              <Button variant="outlined" onClick={clearTextField}>
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

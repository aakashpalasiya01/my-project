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
import React from "react";
import { Container } from "@mui/material";
import moment from "moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToPassbook,
  clearForm,
  setForm,
  setRemainingAmount,
} from "./redux/slices/passbookslice";
import { calculateinterest } from "./Interest";

const Practise = () => {
  const dispatch = useDispatch();
 
  const passbook = useSelector((state) => state.passbook);

  let totalInterest = calculateinterest(passbook.list);



  const handlehange = (e) => {
    const { name, value } = e.target;
    dispatch(setForm({ [name]: value }));
  };
  const cleartextfiled = () => {
    dispatch(clearForm());
    toast.info("Reset all details successfuly");
  };
  const handleformdata = (e) => {
    e.preventDefault();
    const { form, remainingAmount } = passbook;
    if (form.transactionamount === 0 || form.remark === "") {
      toast.info("Please Fill All Details");

      return;
    }
    const currentDate = moment().format("MMM Do YY");

    const newRemainingAmount =
      form.transactiontype === "credit"
        ? remainingAmount + parseInt(form.transactionamount)
        : remainingAmount - parseInt(form.transactionamount);

      dispatch(setRemainingAmount(newRemainingAmount));
    if (newRemainingAmount < 0) {
      toast.warning("insufficient amount");

      return;
    }
    if (passbook.list.length > 0 && passbook.list.length % 5 === 0) {
      const creditInterest = {
      
      transactionamount: totalInterest,
      transactiontype: "interest",
      remark: "credit interest",
      date: currentDate,
      remainingAmount: newRemainingAmount,
    };
    debugger
    dispatch(addToPassbook(creditInterest));
    return
  }
    const updatedForm = {
      ...form,
      date: currentDate,
      remainingAmount: newRemainingAmount,
    };

    dispatch(addToPassbook(updatedForm));
    toast.success(`Amount ${updatedForm.transactiontype} successfuly`);
    dispatch(clearForm());
   
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
              value={passbook.form.transactionamount}
              onChange={handlehange}
            />
            <FormControl>
              <Typography variant="h5">Transaction Type</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="transactiontype"
                value={passbook.form.transactiontype}
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
              value={passbook.form.remark}
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

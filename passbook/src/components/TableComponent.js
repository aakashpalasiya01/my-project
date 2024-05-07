import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TableComponent = () => {
  const passbook = useSelector((state) => state.passbook.list) || [];
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">s.no</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Remaing</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {passbook?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{row?.date}</TableCell>
                <TableCell align="right">
                  {row?.transactiontype ? `${row.transactiontype} / ` : ""}
                  {row?.date ? `${row.date} / ` : ""}
                  {row?.remark ? row.remark : ""}
                </TableCell>{" "}
                <TableCell align="right">{row?.transactiontype}</TableCell>
                <TableCell align="right">{row?.transactionamount}</TableCell>
                <TableCell align="right"> {row?.remainingAmount}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box marginTop={5} textAlign={"center"}>
        <Link to={"/"}>Click here to view table</Link>
      </Box>
    </>
  );
};

export default TableComponent;

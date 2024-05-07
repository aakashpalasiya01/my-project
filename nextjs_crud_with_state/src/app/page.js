"use client";
import React, { useEffect, useState } from "react";
import UserTabel from "./utils/UserTabel";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserTableData = () => {
  let storedData = localStorage.getItem("userData");
  const router =useRouter()
  const [rows, setRows] = useState([]);
  const handleDelete = (id) => {
    let storedData = localStorage.getItem("userData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const updatedData = parsedData.filter((userData) => userData.id !== id);

      localStorage.setItem("userData", JSON.stringify(updatedData));

      setRows(updatedData);

      toast.success("User deleted successfully");
    } else {
      console.error("No userData found in localStorage");
    }
  };

  const handleEdit = (id) => {
    router.push(`/edituserdata/${id}`);
  };
  useEffect(() => {
    if (storedData?.length) {
      const parsedData = JSON.parse(storedData);
      setRows(parsedData);
    }
  }, []);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      // minHeight="50vh"
    >
      <Link href="/adduserdata">
        <Button type="button" variant="contained" color="info">
          Add Data
        </Button>
      </Link>{" "}
      {rows?.length ? (
        <UserTabel
          rows={rows}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <Typography variant="h3">No Data </Typography>
      )}
    </Box>
  );
};

export default UserTableData;

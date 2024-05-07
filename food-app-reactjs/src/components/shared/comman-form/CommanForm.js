import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const CommanForm = ({
  handleChange,
  handleSubmit,
  formData,
  isEdit,
  simpleValidator,
}) => {
  return (
    <Box margin={4} padding={4}>
      <form onSubmit={handleSubmit}>
        <Box textAlign={"center"}>
          <Typography variant="h6">
            {" "}
            {isEdit ? "Edit Personal Information" : "Add Personal Information"}
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData?.name}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("name")}
            />
            {simpleValidator?.current?.message("name", formData?.name, "required")}

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData?.email}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("email")}
            />
            {simpleValidator?.current?.message(
              "email",
              formData?.email,
              "required"
            )}

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData?.password}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("password")}
            />
            {simpleValidator?.current?.message(
              "password",
              formData?.password,
              "required"
            )}

            <TextField
              fullWidth
              label="Occupation"
              name="occupation"
              value={formData?.occupation}
              onChange={handleChange}
              onBlur={() =>
                simpleValidator?.current?.showMessageFor("occupation")
              }
            />
            {simpleValidator?.current?.message(
              "occupation",
              formData?.occupation,
              "required"
            )}

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData?.phoneNumber}
              onChange={handleChange}
              onBlur={() =>
                simpleValidator?.current?.showMessageFor("phoneNumber")
              }
            />
            {simpleValidator?.current?.message(
              "phoneNumber",
              formData?.phoneNumber,
              "required"
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Location</Typography>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData?.city}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("city")}
            />
            {simpleValidator?.current?.message("city", formData?.city, "required")}

            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData?.state}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("state")}
            />
            {simpleValidator?.current?.message(
              "state",
              formData?.state,
              "required"
            )}

            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData?.country}
              onChange={handleChange}
              onBlur={() => simpleValidator?.current?.showMessageFor("country")}
            />
            {simpleValidator?.current?.message(
              "country",
              formData?.country,
              "required"
            )}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {isEdit ? "SAVE" : "ADD"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CommanForm;

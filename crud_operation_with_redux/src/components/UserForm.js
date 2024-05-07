import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useRef } from "react";
import SimpleReactValidator from "simple-react-validator";

const UserForm = ({
  handleSubmit,
  handleChange,
  clearForm,
  formData,
  simpleValidator,
  isEdit
}) => {
  return (
    <>
      <Box width={400}>
        <Stack>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: 2, padding: 2 }}
              fullWidth
              label="First Name"
              placeholder="first Name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              onBlur={() => simpleValidator.current.showMessageFor("firstName")}
            />
            {simpleValidator.current.message(
              "firstName",
              formData.firstName,
              "required"
            )}

            <TextField
              fullWidth
              sx={{ margin: 2, padding: 2 }}
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              onBlur={() => {
                simpleValidator.current.showMessageFor("lastName");
              }}
            />
            {simpleValidator.current.message(
              "lastName",
              formData.lastName,
              "required"
            )}
            <TextField
              fullWidth
              sx={{ margin: 2, padding: 2 }}
              type="email"
              label="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              onBlur={() => {
                simpleValidator.current.showMessageFor("email");
              }}
            />
            {simpleValidator.current.message(
              "email",
              formData.email,
              "required"
            )}
            <TextField
              fullWidth
              sx={{ margin: 2, padding: 2 }}
              type="password"
              label="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              onBlur={() => {
                simpleValidator.current.showMessageFor("password");
              }}
            />
            {simpleValidator.current.message(
              "password",
              formData.password,
              "required"
            )}
            <TextField
              fullWidth
              sx={{ margin: 2, padding: 2 }}
              label="address"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={formData.address}
              onBlur={() => {
                simpleValidator.current.showMessageFor("address");
              }}
            />
            {simpleValidator.current.message(
              "address",
              formData.address,
              "required"
            )}
            <Box
              fullWidth
              sx={{
                display: "flex",
                margin: 2,
                padding: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button type="submit" variant="contained" size="medium">
                {isEdit ? 'editForm' :'save form'}
              </Button>
              <Button type="submit" variant="outlined" size="medium" onClick={clearForm}>clear</Button>
            </Box>
          </form>
        </Stack>
      </Box>
    </>
  );
};

export default UserForm;

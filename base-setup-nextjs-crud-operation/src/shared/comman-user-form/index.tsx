"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phoneNumber: string;
}

interface CommanUserFormProps {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isEdit?: boolean;
  simpleValidator:any
}

const CommanUserForm: React.FC<CommanUserFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  isEdit,
  simpleValidator,
}) => {
  return (
    <>
      <Row
        className="justify-content-center align-items-center mt-5 w-50     "
        style={{ minHeight: "100vh" }}
      >
        <Col md={6}>
          <Link href={"/"}>
            <Button
              className="mt-3 w-25 mx-1  "
              variant="primary"
              type="button"
            >
              Home
            </Button>
          </Link>
          <Form
            onSubmit={handleSubmit}
            className=".bg-transparent "
            style={{ textAlign: "center" }}
          >
            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                className="text-lg-start "
                value={formData?.name}
                onChange={handleChange}
                onBlur={() => simpleValidator.current.showMessageFor("name")}
              />
              {simpleValidator.current.message(
                "name",
                formData.name,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                onBlur={() => simpleValidator.current.showMessageFor("email")}
              />
              {simpleValidator.current.message(
                "email",
                formData.email,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData?.password}
                onChange={handleChange}
                onBlur={() =>
                  simpleValidator.current.showMessageFor("password")
                }
              />
              {simpleValidator.current.message(
                "password",
                formData.password,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formCity"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData?.city}
                onChange={handleChange}
                onBlur={() => simpleValidator.current.showMessageFor("city")}
              />
              {simpleValidator.current.message(
                "city",
                formData.city,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formState"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={formData?.state}
                onChange={handleChange}
                onBlur={() => simpleValidator.current.showMessageFor("state")}
              />
              {simpleValidator.current.message(
                "state",
                formData.state,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formCountry"
            >
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="country"
                value={formData?.country}
                onChange={handleChange}
                onBlur={() => simpleValidator.current.showMessageFor("country")}
              />
              {simpleValidator.current.message(
                "state",
                formData.country,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formOccupation"
            >
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter occupation"
                name="occupation"
                value={formData?.occupation}
                onChange={handleChange}
                onBlur={() =>
                  simpleValidator.current.showMessageFor("occupation")
                }
              />
              {simpleValidator.current.message(
                "occupation",
                formData.occupation,
                "required"
              )}
            </Form.Group>

            <Form.Group
              className="mt-2 text-light text-start "
              controlId="formPhoneNumber"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData?.phoneNumber}
                onChange={handleChange}
                onBlur={() =>
                  simpleValidator.current.showMessageFor("phoneNumber")
                }
              />
              {simpleValidator.current.message(
                "phoneNumber",
                formData.phoneNumber,
                "required"
              )}
            </Form.Group>

            <Button className="mt-3 w-25 " variant="primary" type="submit">
              {isEdit ? "Save" : "Add"}
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CommanUserForm;

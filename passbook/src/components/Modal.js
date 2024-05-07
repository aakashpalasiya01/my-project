import React, { useEffect, useState } from "react";

const Modal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [list, setlist] = useState([]);
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setlist([...list, form]);
    
    setForm({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });

    onClose();
   
  };

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };


  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="w-25">
          <div className="d-flex justify-content-between">
            <h1 className="text-dark">Add Contact</h1>
            <button
              onClick={onClose}
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleFormData}
              required
              placeholder="Enter Your Name"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleFormData}
              required
              placeholder="Enter Your Email"
            />

            <label htmlFor="phoneNumber">PhoneNumber :</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleFormData}
              required
              placeholder="Enter Your Phone Number"
            />

            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleFormData}
              required
              placeholder="Enter Your Address"
            />

            <div className="d-flex justify-content-start mt-3">
              <button
                onClick={() => onClose}
                className="btn btn-primary mx-3"
                type="submit"
              >
                Submit
              </button>
              <button
                className="btn btn-dark"
                type="button"
                onClick={clearForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

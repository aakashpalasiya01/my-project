"use client";
import Swal from "sweetalert2";

const AddNewButton = () => {
  const handleWarning = () => {
    Swal.fire({
      title: "Warning!",
      text: "Card limit exceeded. Please remove card to add new.",
      icon: "warning",
    });
  };
  return <button onClick={handleWarning} className="btn_animated btn_blocksm primary_btn">Add New</button>;
};

export default AddNewButton;

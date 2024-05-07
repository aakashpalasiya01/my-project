"use client";
import UserTable from "@/shared/comman-user-table";
import { isDialogOpen } from "@/utils/CommonService";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { toast } from "react-toastify";
import AddUserForm from "./AddUserform";
import ViewUser from './ViewUserForm'

const index = () => {
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");
  const [search,setSearch]=useState('');

  const [tableData, settableData] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mern-admin-backend-jxw3.onrender.com/general/users"
      );
      settableData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://mern-admin-backend-jxw3.onrender.com/general/user/delete/${id}`
      );
      toast.success("user deleted successfuly");
      fetchData();
    } catch (error) {
      toast.warn("Some thing went wrong");
    }
  };
  const handleEdit = (id: string) => {
    router.push(`/edituser/${id}`);
  };
  const handleNavigate = () => {
    router.push("/adduser");
  };

  const handleShowModal = (id: string) => {
    setUserIdToDelete(id);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const confirmDelete = () => {
    handleDelete(userIdToDelete);
    setShowModal(false);
  };
   const handleView=(id: string)=>{
      isDialogOpen.onNext({
        open: true,
        data: { message: <ViewUser id={id}/>, title: "user Details" },
        cancelText: "Cancel",
        confirmText: "Okay",
        onConfirm: () => { 
          isDialogOpen.onNext({open:false})
        },
        onCancel: () => { 
          isDialogOpen.onNext({open:false})
        },
      })
    
   }

   let filtereddata=tableData?.filter((userdata)=>userdata?.name?.toLocaleLowerCase()?.includes(search?.toLocaleLowerCase()))
  return (
    <>
      <div className="container  mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 className="text-center mt-5  text-center  text-light ">
              User Table
            </h1>

            <div className="row  flex flex-row justify-content-between  ">
            <Button
              className=" col-1  text-center text-light px-4 py-2 mx-4  my-2   rounded "
              onClick={handleNavigate}
              variant="info"
            >
               Add User
            </Button>
            <input placeholder="Search here By Name ..." className="col-3 px-4 py-2 mx-4  my-2   rounded" type="search"  onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
            
            <UserTable
              tableData={filtereddata}
              handleDelete={handleShowModal}
              handleEdit={handleEdit}
              handleView={handleView}
            />
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default index;

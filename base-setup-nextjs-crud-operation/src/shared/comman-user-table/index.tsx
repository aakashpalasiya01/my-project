'use client'
import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Image from 'next/image'
import viewIcon from '../../assets/images/view.svg'
import deleteIcon from '../../assets/images/delete.svg'
import editIcon from '../../assets/images/edit.svg'
interface UserData {
  _id: string;
  name: string;
  email: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phoneNumber: string;
}

interface UserTableProps {
  tableData: UserData[];
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleView: (id: string) => void;
}
const UserTable: React.FC<UserTableProps> = ({
  tableData,
  handleDelete,
  handleEdit,
  handleView,
}) => {
  return (
    <div id="content">
      <Container fluid="fluid">
        <Row>
          <Col md="12">
            <div className="bt_table_wrapper">
              <table>
                <thead>
                  <tr>
                    <th>S. No</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                 
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((userData, index) => (
                    <tr key={userData?._id}>
                      <td>{index + 1}</td>
                      <td>{userData?.name}</td>
                      <td>{userData?.email}</td>
                      <td>{userData?.city}</td>
                      <td>{userData?.state}</td>
                      <td>
                        <ul className="bt_table_action">

                        
                          <li>
                            <button onClick={() => handleView(userData._id)}>
                              <Image src={viewIcon}  alt="View icon" />
                            </button> 
                          </li>
                          <li>
                            <button onClick={() => handleEdit(userData._id)}>
                              <Image src={editIcon} alt="Edit icon" /> 
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handleDelete(userData._id)} >
                               <Image src={deleteIcon} alt="Delete Icon" /> 
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserTable;

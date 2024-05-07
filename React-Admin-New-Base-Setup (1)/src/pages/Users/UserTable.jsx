import React, { useState, useEffect, useCallback } from "react";
import CommonTable from "components/shared/common-table/CommonTable";
import moment from "moment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteUserById, getUsers } from "redux/action/Users";
import { forSuccess, isDialogOpen } from "utils/common/CommonService";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "components/shared/common-dialog";
const UserTable = ({ totalCount, pagination, setPagination, userList }) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    isDialogOpen.onNext({
      open: true,
      data: {
        message: "Are you sure want to delete?",
        title: "Confirmation",
      },
      cancelText: "No",
      confirmText: "Yes",
      onCancel: () => isDialogOpen.onNext(false),
      onConfirm: () => {
        isDialogOpen.onNext(false);
        dispatch(deleteUserById(id, userList)).then((res)=>{
          if (res){
    forSuccess("delete user successfuly");

          }
        });
      },
    });

  };
  const handleEDit = (id) => {
    navigate(`/edituser/${id}`);
  };
  const handleView = (id) => {
    navigate(`/viewuser/${id}`);
  };
  const keys = [
    "S.No",
    "Name",
    "Email",
    "Phone Number",
    "Occupation",
    "City",
    "Created At",
    "Actions",
  ];

  const userTableData = useCallback(() => {
    if (userList?.length) {
      return userList.map((user, index) => {
        return [
          index + 1,
          user?.name,
          user?.email,
          user?.phoneNumber,
          user?.occupation,
          user?.city,
          moment(user?.createdAt).format("lll"),
          <>
            <Button
              onClick={() => {
                handleView(user._id);
              }}
            >
              {" "}
              <VisibilityIcon />
            </Button>
            <Button
              onClick={() => {
                handleEDit(user._id);
              }}
            >
              {" "}
              <EditIcon />
            </Button>
            <Button
              onClick={() => {
                handleDelete(user._id);
              }}
            >
              {" "}
              <DeleteIcon />
            </Button>
          </>,
        ];
      });
    } else {
      return [];
    }
  }, [userList]);

  useEffect(() => {
    let userRowData = userTableData(userList);
    if (JSON.stringify(userRowData) !== JSON.stringify(userData)) {
      setUserData(userRowData);
    }
  }, [userTableData, userList, userData]);

  return (
    <CommonTable
      totalCount={totalCount}
      customPagination={pagination}
      setCustomPagination={setPagination}
      data={userData}
      keys={keys}
    />
  );
};

export default UserTable;

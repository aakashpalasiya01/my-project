'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewUser = ({id}) => {
  const [userData, setUserData] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://mern-admin-backend-jxw3.onrender.com/general/user/${id}`);
      setUserData(res.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); 

  return (
     <>
     {userData && (
          <>
            <h3>Name :{userData?.name}</h3>
            <h5>Email: {userData?.email}</h5>
            <h5>City: {userData?.city}</h5>
            <h5>State: {userData?.state}</h5>
            
          </>
        )}
     </>
  );
};

export default ViewUser;

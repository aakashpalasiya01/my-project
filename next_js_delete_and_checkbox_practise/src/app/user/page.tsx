'use client'
import React from 'react'
import { useState } from 'react'

const AddUserInformation = () => {
    const [userData,setuserData]=useState({
        name: '',
        dateOfBirth: '',
        gender: '', 
        mobileNumber:'',
        address: '',
        city:'',
    })
  return (
    <>
    </>
  )
}

export default AddUserInformation
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFood } from 'redux/action/Food';

const AllFoodShow = () => {
  const dispatch =useDispatch();
  useEffect((
       
  )=>{
    dispatch(getAllFood())
  },[])
  const data =useSelector((state)=>state)
  console.log(data)
  return (
    <div>AllFoodShow</div>
  )
}

export default AllFoodShow
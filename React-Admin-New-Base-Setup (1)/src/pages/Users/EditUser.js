import CommanForm from 'components/shared/comman-form/CommanForm';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, updateUserById } from 'redux/action/Users';
import SimpleReactValidator from 'simple-react-validator';
import { forSuccess } from 'utils/common/CommonService';

const EditUser = () => {
  const {id}=useParams();
  const { users} = useSelector(state => state.userReducers)
  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();


  
  const dispatch=useDispatch();
 
    const [formData, setFormData] = useState();

    useEffect(()=>{
      if (id){
         if (users.length){
          const data=users?.find((val)=>val._id ===id)
          setFormData(data)
         }
      }
    },[id,users])
      const navigate =useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    const formValid = simpleValidator.current.allValid()
    if (!formValid) {
      
      simpleValidator.current.showMessages()
      forceUpdate(1)
      return
    }

        dispatch(updateUserById(id,formData)).then(res=>{
          if(res){
            forSuccess('user edited successfuly')
            setFormData({})
            navigate('/users')
          }
        })

      };
  return (
  <>
  <CommanForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} isEdit simpleValidator={simpleValidator}/>
  </>
  )
}

export default EditUser
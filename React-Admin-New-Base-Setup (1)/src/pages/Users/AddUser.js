import CommanForm from 'components/shared/comman-form/CommanForm';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/action/Users';
import SimpleReactValidator from 'simple-react-validator';
import { forSuccess } from 'utils/common/CommonService';

const AddUser = () => {
  const dispatch=useDispatch();
  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();

     const defaultForm={
      name: '',
      email: '',
      password: '',
      city: '',
      state: '',
      country: '',
      occupation: '',
      phoneNumber: ''
    }
    const [formData, setFormData] = useState(defaultForm);
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
         dispatch(addUser(formData)).then((res)=>{
          if (res){
            forSuccess('user added successfuly')
           setFormData(defaultForm)
           navigate('/users')

          }
         })
      };
  return (
  <>
  <CommanForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} simpleValidator={simpleValidator} />
  </>
  )
}

export default AddUser
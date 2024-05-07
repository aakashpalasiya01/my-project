import { getUsers,deleteUsers, updateData} from "./reducers"
import axios from '../axiosConfig'
const getHeader = ()=>{
    return {
        headers : {
        "Content-Type" : 'application/json'
    }}
}
export const getAllUsers = () => async (dispatch)=>{
    
const response = await axios.get("/users", getHeader())
dispatch(getUsers(response.data))
}
export const deleteUser = (id) => async (dispatch)=>{
    const response = await axios.delete(`/user/delete/${id}`, getHeader())
    return response
}
export const updateUser = (id,form) => async (dispatch)=>{
     await axios.put(`/user/update/${id}`,form, getHeader()).then(()=>{dispatch(getAllUsers())})
   
    }



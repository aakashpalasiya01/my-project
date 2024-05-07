import axios from '../utils/axiosConfig'
import { API_ROUTES } from 'utils/common/constant/constant'

export const getUsersApi = () => axios.get(API_ROUTES.GET_USER_API)
export const getUserByIdApi = (id) => axios.get(`${API_ROUTES.GET_USER_BY_ID_API}$/{id}`)
export const deleteUserByIdApi = (id) => axios.delete(`${API_ROUTES.DELETE_USER_BY_ID_API}/${id}` )
export const updateUserByIdApi = (id,body) => axios.put(`${API_ROUTES.UPDATE_USER_BY_ID_API}/${id}`, body)
export const addUserApi = (body) => axios.post(API_ROUTES.ADD_USER_API, body)






import axios from '../utils/axiosConfig'
import { API_ROUTES } from 'utils/common/constant/constant'

export const logout = () => axios.post(API_ROUTES.LOGOUT_API)

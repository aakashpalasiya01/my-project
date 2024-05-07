import axios from '../utils/axiosConfig'
import { API_ROUTES } from 'utils/common/constant/constant'

export const getAllFoodApi = () => axios.get(API_ROUTES.GET_ALL_FOOD_API)







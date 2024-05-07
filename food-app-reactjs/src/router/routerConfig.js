import { ROUTES } from 'utils/common/constant/constant'
import { PrivateLayout, PublicLayout } from './routerLayout'
import Login from 'pages/Login'
import Users from 'pages/Users'
import AddUser from 'pages/Users/AddUser'
import EditUser from 'pages/Users/EditUser'
import ViewUser from 'pages/Users/ViewUser'
import AllFoodShow from 'pages/Food/AllFoodShow'

export const publicRoutes = [
  {
    key: 'login',
    path: ROUTES.LOGIN_PATH,
    component: Login,
    layout: PublicLayout
  }
]

export const privateRoutes = [
  {
    key: 'Food',
    path: ROUTES.ALL_FOODS_PATH,
    component: AllFoodShow,
    exact: true,
    layout: PrivateLayout
  },

]
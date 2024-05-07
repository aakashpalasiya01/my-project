import { ROUTES } from 'utils/common/constant/constant'
import { PrivateLayout, PublicLayout } from './routerLayout'
import Login from 'pages/Login'
import Users from 'pages/Users'
import AddUser from 'pages/Users/AddUser'
import EditUser from 'pages/Users/EditUser'
import ViewUser from 'pages/Users/ViewUser'

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
    key: 'Invitations',
    path: ROUTES.USERS_PATH,
    component: Users,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'adduser',
    path: ROUTES.ADD_USER_PATH,
    component: AddUser,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'edituser',
    path: ROUTES.EDIT_USER,
    component: EditUser,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'view user',
    path: ROUTES.VIEW_USER,
    component: ViewUser,
    exact: true,
    layout: PrivateLayout
  },
]
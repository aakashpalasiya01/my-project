import React from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from 'components/shared/sidebar'
import Header from 'components/shared/header'
import { useSelector } from 'react-redux'
import { ROUTES } from 'utils/common/constant/constant'

export const PrivateLayout = ({ children }) => {
  const { token} = useSelector(state => state.auth)
  const { history } = children.props

  if(token) {
    return (
      <div id="wrapper">
        <div className='main'>
          <div className='aside'>
            <Sidebar history={history} />
          </div>
          <div className='content'>
            <Header history={history} />
            {children}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Navigate to={ROUTES.LOGIN_PATH} replace />
  )
}

export const PublicLayout = ({ children }) => {
  const { token } = useSelector(state => state.auth)
    if(!token) {
    return (
      <div id="wrapper">
        {children}
      </div>
    )
  }
  return (
   <Navigate to={ROUTES.USERS_PATH} replace />
  )
}

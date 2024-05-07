import React from 'react'
import { Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter  } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import { Provider } from 'react-redux'
import { publicRoutes, privateRoutes } from './routerConfig'

import ErrorBoundary from "./ErrorBoundary";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Loader from 'components/shared/loader/Loader'
import ConfirmDialog from 'components/shared/common-dialog'

import store from 'redux/store'
import { ToastContainer } from 'react-toastify'

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA3F3F"
    },
    secondary: {
      main: "#262933"
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Poppins", "sans-serif"].join(",")
  }
});

const Main = () => {
  const history = createHistory()
  history.listen(_=> {
    window.scrollTo(0,0)
  })
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Loader />
        <ConfirmDialog />
        <ToastContainer/>
        <HistoryRouter history={history}>
          <ErrorBoundary>
            <Routes>
                {privateRoutes.map(({ layout: PrivateLayout, component: Component, ...restProps }) => (
                  <Route 
                    {...restProps}
                    element={
                      <PrivateLayout>
                        <Component history={history} />
                      </PrivateLayout>
                    }
                  />
                ))}
                {publicRoutes.map(({ layout: PublicLayout, component: Component, ...restProps }) => (
                  <Route 
                    {...restProps}
                    element={
                      <PublicLayout>
                        <Component {...history} />
                      </PublicLayout>
                    }
                  />
                ))}
              <Route path='*' element={ <Navigate replace to='/login' /> } />
            </Routes>
          </ErrorBoundary>
        </HistoryRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default Main
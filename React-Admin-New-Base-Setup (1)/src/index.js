import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import Main from './router';
import axios from './utils/axiosConfig';
import reportWebVitals from './reportWebVitals';
import authInterceptor from './utils/axiosConfig/interceptors/authInterceptor';
import tokenInterceptor from './utils/axiosConfig/interceptors/tokenInterceptor';
import errorHandler from './utils/axiosConfig/interceptors/errorHandler';



axios.interceptors.request.use(authInterceptor, error => Promise.reject(error));
axios.interceptors.response.use(tokenInterceptor, error => errorHandler(error));

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

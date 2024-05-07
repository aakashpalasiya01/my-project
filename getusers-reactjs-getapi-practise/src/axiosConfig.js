import axios from "axios";


const Instance = axios.create({
    baseURL: 'https://mern-admin-backend-jxw3.onrender.com/general',
   
    headers: {'X-Custom-Header': 'foobar'}
  });
  export default Instance
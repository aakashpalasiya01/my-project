import { BASE_URL } from "config.js";
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;
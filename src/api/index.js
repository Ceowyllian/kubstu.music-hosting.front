import axiosInstance from 'axios';
import { API_URL } from '../shared/constants';

const axios = axiosInstance.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
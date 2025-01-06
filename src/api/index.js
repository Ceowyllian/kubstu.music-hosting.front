import axiosInstance from 'axios';
import { API_URL } from '../shared/constants';

export const axios = axiosInstance.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setAuthToken({ data }) {
  const auth_token = data.auth_token;
  axios.defaults.headers.common['Authorization'] = `Token ${auth_token}`;
}

export function removeAuthToken() {
  delete axios.defaults.headers.common['Authorization'];
}

export default axios;

import { API_BASE_URL, token } from '@/data';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

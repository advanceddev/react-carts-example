import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_API_URL as string

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

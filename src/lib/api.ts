import axios from 'axios';
import type { AxiosInstance } from 'axios';

export default function api() {
  const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return apiClient;
}

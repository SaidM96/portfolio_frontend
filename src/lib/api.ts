import axios from 'axios';
import type { AxiosInstance } from 'axios';

export default function api() {
  console.log(process.env.API_BASE_URL, ' ikhan');
  const apiClient: AxiosInstance = axios.create({
    baseURL: `${process.env.API_BASE_URL}`,
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return apiClient;
}

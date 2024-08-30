import axios from 'axios';
import type { AxiosInstance } from 'axios';

export default function api() {
  const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?`${process.env.NEXT_PUBLIC_API_BASE_URL}` : '',
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return apiClient;
}

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import api from '@/lib/api';

export default function useSendMeMsg(
  options?: UseMutationOptions<AxiosResponse<any, any>, Error, unknown>
) {
  const { mutate, isError, isPending, isSuccess, error, data } = useMutation({
    mutationKey: ['send-me-message'],
    mutationFn: ({
      email,
      subject,
      message
    }: {
      email: string;
      subject: string;
      message: string;
    }) => api().post('api/message', { email, subject, message }),
    ...options
  });
  return {
    mutate,
    isError,
    isPending,
    isSuccess,
    error,
    data
  };
}

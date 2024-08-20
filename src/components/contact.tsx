import { Input } from './ui/input';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import {z} from 'zod';
export default function Contact() {
  const schema = z.object({
    fullName: z.string().min(1, { message: 'Full name is required' }),
    email: z.string().min(1, { message: 'Email is required' }),
    company: z.string().min(1, { message: 'Company name is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center w-full h-full'
    >
      <h1 className='text-2xl sm:text-4xl lg:text-6xl text-white text-center font-bold'>
        Contact <span className='text-primary'>me</span>
      </h1>
      <div className='flex w-full sm:w-3/4 lg:w-1/2 h-full  flex-col gap-6 items-center text-xl text-white justify-center sm:gap-10 '>
        <Input placeholder='Email' className='w-full' />
        <Input placeholder='Subject' className='w-full' />

        <Textarea placeholder='Message' className='w-full' />
        <Button className='max-lg:p-x-4 lg:w-1/2 rounded-lg sm:rounded-3xl h-12 text-black font-bold text-sm'>
          Send Message
        </Button>
      </div>
    </form>
  );
}

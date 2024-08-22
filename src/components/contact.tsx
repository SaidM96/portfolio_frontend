import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInputItem from './form-input-form';
import { Form, FormField } from './ui/form';
import { Input } from './ui/input';
export default function Contact() {
  const schema = z.object({
    email: z.string().email({
      message: 'Invalid email'
    }).max(30, { message: 'Email is too long' }).min(1, { message: 'Email is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }).max(50, { message: 'Subject is too long' }),
    message: z.string().min(1, { message: 'Message is required' }).max(500, { message: 'Message is too long' })
  });

  type FormData = z.infer<typeof schema>;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col items-center w-full h-full'
      >
        <h1 className='text-2xl sm:text-4xl  text-white text-center font-bold'>
          Contact <span className='text-primary'>me</span>
        </h1>

        <div className='flex w-full sm:w-3/4 lg:w-1/2 h-full  flex-col gap-6 items-center text-xl text-white justify-center sm:gap-10 '>
          <FormField
            name={'email'}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormInputItem
                error={fieldState.error?.message!}
                label={'Email'}
                input={
                  <Input
                    placeholder='Email'
                    type={'text'}
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={field.onChange}
                    inputMode='text'
                    className='w-full'
                  />
                }
              />
            )}
          />

          <FormField
            name={'subject'}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormInputItem
                error={fieldState.error?.message!}
                label={'Subject'}
                input={
                  <Input
                    placeholder='Subject'
                    type={'text'}
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={field.onChange}
                    inputMode='text'
                    className='w-full'
                  />
                }
              />
            )}
          />
          <FormField
            name={'message'}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormInputItem
                error={fieldState.error?.message!}
                label={'Message'}
                input={
                  <Textarea
                    placeholder='Message'
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={field.onChange}
                    inputMode='text'
                    className='w-full'
                  />
                }
              />
            )}
          />
          <Button className='max-lg:p-x-4 lg:w-1/2 rounded-lg sm:rounded-3xl h-12 text-black font-bold text-sm'>
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}

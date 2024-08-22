import { FiAlertCircle } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { FormDescription, FormItem, FormLabel } from './ui/form';

interface PropsType {
  label: string;
  error: string;
  input: JSX.Element;
  description?: string;
}

export default function FormInputItem<T>({
  label,
  error,
  input,
  description
}: PropsType) {

  return (
    <FormItem className={cn('flex flex-col w-full')}>
      {/* <FormLabel className='self-start text-sm font-medium text-white'>
        {label}
      </FormLabel>
      {description && (
        <FormDescription className='leading-none self-start text-[13px] text-gray-400 font-normal'>
          {description}
        </FormDescription>
      )} */}
      {input}
      {error && (
        <div className={'ltr:left-1 rtl:right-1 flex gap-1'}>
          <FiAlertCircle
            className='w-4 h-4 mr-1 text-red-400'
            aria-label='error'
            role='alert'
          />
          <p className='text-xs tracking-wider text-red-400'>{error}</p>
        </div>
      )}
    </FormItem>
  );
}

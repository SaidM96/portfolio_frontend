'use client';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export default function ExperiencesItem({
  title,
  description,
  year,
  isRight
}: {
  title: string;
  description: string;
  year: string;
  isRight: boolean;
}) {
  return (
    // <div
    //   className={cn(
    //     isRight
    //       ? 'text-start flex-row-reverse self-end'
    //       : 'text-end justify-center self-start xl:translate-x-[22px] translate-x-[px] sm:translate-x-[8px]',
    //     'flex items-center gap-4 w-[200px] sm:w-[300px] xl:w-[400px] '
    //   )}
    // >
    //   <div className='text-white text-sm sm:text-lg font-bold'>
    //     <p className=''>{year}</p>
    //     <div className='bg-background text-white py-4 px-6 grid gap-2 border-2 border-primary mt-8 mb-4 rounded-[50px]'>
    //       <p className=''>{title}</p>
    //       <p className='text-white text-opacity-50 font-medium'>
    //         {description}
    //       </p>
    //     </div>
    //   </div>

    //   <div className='w-4 xl:w-8 h-full relative'>
    //     <div className='w-1 xl:w-2 h-full bg-primary'></div>
    //     <div className='w-4 h-4 xl:w-8 xl:h-8 rounded-full bg-primary absolute z-10 top-1 -left-[63%] xl:-left-[55%] '></div>
    //   </div>
    // </div>
    <div
      className={cn(
        isRight ? 'text-start' : 'text-end',
        'items-center w-[150px] ss:w-[200px] sm:w-[300px] xl:w-[400px] text-white text-xs s:text-sm sm:text-lg font-bold'
      )}
    >
      <p className='px-2'>{year}</p>
      <div className='bg-background text-white py-4 px-6 grid gap-2 border-2 border-primary mt-3 mb-4 rounded-[50px]'>
        <p className=''>{title}</p>
        <p className='text-white text-opacity-50 font-medium'>{description}</p>
      </div>
    </div>
  );
}

'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Drawer from './dialog';

export default function TimelineItem({
  title,
  description,
  year,
  isRight,
  metadata,
}: {
  title: string;
  description: string;
  year: string;
  isRight: boolean;
  metadata: any;
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <div
        // whileHover={{ scale: 1.1 }}
        // onClick={() => setOpenDrawer(curr => !curr)}
        className={cn(
          isRight
            ? 'text-start '
            : 'text-end ',
          'max-sm:pb-3 pt-1 items-center cursor-pointer w-[280px] max-sm:!text-start sm:w-[300px] xl:w-[400px] text-white text-xs s:text-sm sm:text-lg font-bold'
        )}
      >
        <p className='px-2'>{year}</p>
        <div className='bg-background hover:border-4 text-white py-2 px-4 sm:px-6 grid gap-2 border-2 border-primary mt-3 mb-4 rounded-[50px]'>
          <p className=' text-primary'>{title}</p>
          <p className='text-primary line-clamp-1 text-white text-opacity-50 font-medium'>
            {description}
          </p>
        </div>
      </div>
      <Drawer
        openDrawer={openDrawer}
        closeOpenDrawer={setOpenDrawer.bind(null, false)}
      />
    </div>
  );
}

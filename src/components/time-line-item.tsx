'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
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
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{
          rotateY: isRight ? -360 : 360,
          transition: { duration: 1.5 }
        }}
        onClick={() => setOpenDrawer(curr => !curr)}
        className={cn(
          isRight
            ? 'text-start sm:hover:!translate-x-10'
            : 'text-end sm:hover:!-translate-x-10',
          'items-center cursor-pointer w-[250px] transform transition-transform duration-200 ease-in-out max-s:hover:!translate-x-2 max-sm:hover:!translate-x-4 max-sm:!text-start sm:w-[300px] xl:w-[400px] text-white text-xs s:text-sm sm:text-lg font-bold'
        )}
      >
        <p className='px-2'>{year}</p>
        <div className='bg-background hover:border-4 text-white py-2 px-4 sm:py-4 sm:px-6 grid gap-2 border-2 border-primary mt-3 mb-4 rounded-[50px]'>
          <p className=' text-primary'>{title}</p>
          <p className='text-primary line-clamp-1 text-white text-opacity-50 font-medium'>
            {description}
          </p>
        </div>
      </motion.div>
      <Drawer
        openDrawer={openDrawer}
        closeOpenDrawer={setOpenDrawer.bind(null, false)}
      />
    </div>
  );
}

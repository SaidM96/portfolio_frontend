'use client';
import { etudes, Exp } from '@/lib/data/experiences';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import TimeLine from './time-line';
import { Button } from './ui/button';

export default function Experiences() {
  const [swap, setSwap] = useState(false);

  return (
    <div className='flex flex-col items-center sm:space-y-10 xl:space-x-12 space-y-6 mt-12 w-full'>
      <h1 className='text-2xl sm:text-4xl  text-white text-center font-bold'>
        My <span className='text-primary'>Journey</span>
      </h1>

      <div className='flex bg-primary p-[1px] rounded-[24px] w-[266px] sm:w-[616px] xl:w-[516px]'>
        <Button
          onClick={() => setSwap(false)}
          className={cn(
            swap ? 'text-background' : 'text-primary',
            swap
              ? 'hover:bg-primary bg-primary'
              : 'bg-background hover:bg-background',
            'text-md sm:text-xl w-1/2 text-center font-bold border-2 rounded-[24px] border-primary p-4 sm:p-6'
          )}
        >
          Experiences
        </Button>

        <Button
          onClick={() => setSwap(true)}
          className={cn(
            swap ? 'text-primary' : 'text-background',
            swap
              ? 'bg-background hover:bg-background'
              : 'hover:bg-primary bg-primary',
            'text-md sm:text-xl w-1/2 text-center font-bold border-2 rounded-[24px] border-primary p-4 sm:p-6'
          )}
        >
          Etudes
        </Button>
      </div>

      {swap ? (
        <TimeLine key={swap ? 12 : 10} elements={etudes} />
      ) : (
        <TimeLine elements={Exp} />
      )}
    </div>
  );
}

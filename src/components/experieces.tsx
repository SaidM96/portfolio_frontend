'use client';
import { FaReact } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import TimeLine from './time-line';
import { useState } from 'react';
import { Button } from './ui/button';

const Exp = [
  {
    Icon: FaReact,
    title: 'Exp Development',
    description: 'Improving website',
    year: '2022 - Present',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: 'Hood Businesses',
    description: 'Innovative solutions for a digital world.',
    year: '2022 - 6 Months',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: 'Lendstack',
    description: 'Supercharging Global Lending with AI',
    year: '2023 - (13 Months)',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: 'Exp Development',
    description: 'Improving website',
    year: '2022 - Present',
    metadata: {}
  }
];

const etudes = [
  {
    Icon: FaReact,
    title: 'Anoual - High School',
    description: 'Mathematics and sciences',
    year: '2013 - 2014',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: 'Ibn zohr University',
    description: 'Mathematics and Computer Science',
    year: '2014 - 2018',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: '1337 Coding School',
    description: 'Future Is Loading...',
    year: '2020 - Present',
    metadata: {}
  },
  {
    Icon: FaReact,
    title: 'Frontend Masters',
    description: 'Path to Senior Developer',
    year: '2022 - Present',
    metadata: {}
  }
];

export default function Experiences() {
  const [swap, setSwap] = useState(false);

  return (
    <div className='flex flex-col items-center sm:space-y-16 space-y-6 mt-6 w-full'>
      <h1 className='text-2xl sm:text-4xl lg:text-6xl text-white text-center font-bold'>
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
            'text-md sm:text-2xl w-1/2 text-center font-bold border-2 rounded-[24px] border-primary p-4 sm:p-6'
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
            'text-md sm:text-2xl w-1/2 text-center font-bold border-2 rounded-[24px] border-primary p-4 sm:p-6'
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

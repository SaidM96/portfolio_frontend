import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: 'Lendstack Journey',
    description: 'Micro Lending platform for small businesses,',
    image: '',
    technologies: ['React', 'Nextjs', 'Nestjs', 'Typescript', 'Tailwindcss']
  },

  {
    title: 'Lendstack Journey',
    description: 'Micro Lending platform for small businesses,',
    image: '',
    technologies: ['React', 'Nextjs', 'Nestjs', 'Typescript', 'Tailwindcss']
  },
  {
    title: 'Lendstack Journey',
    description: 'Micro Lending platform for small businesses,',
    image: '',
    technologies: ['React', 'Nextjs', 'Nestjs', 'Typescript', 'Tailwindcss']
  },
  {
    title: 'Lendstack Journey',
    description: 'Micro Lending platform for small businesses,',
    image: '',
    technologies: ['React', 'Nextjs', 'Nestjs', 'Typescript', 'Tailwindcss']
  }
];
export default function Projects() {
  const [seeDetails, setseeDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='flex flex-col items-center w-full h-full space-y-16 mt-6'>
      <h1 className='text-2xl sm:text-4xl  text-white text-center font-bold'>
        Latest <span className='text-primary'>Projects</span>
      </h1>
      <div className='flex mt-[5%] w-full 2xl:w-1/2 h-1/2 justify-center'></div>
    </div>
  );
}

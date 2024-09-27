import React from 'react';
import { CarouselItem } from './ui/carousel';
import { Project } from '@/lib/data/projects';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { CiLink } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <CarouselItem className='h-full flex max-lg:flex-col justify-between'>
      <div className='lg:w-2/3 max-lg:h-3/4 flex flex-col justify-evenly lg:pr-6'>
        <p className='text-primary text-xl lg:text-3xl font-bold'>
          {project.title}
        </p>
        <p className='text-white text-md md:text-lg lg:text-xl font-semibold'>
          {project.description}
        </p>
        <div className='inline-flex gap-2 flex-wrap'>
          {project.technologies.map((tech, index) => (
            <p key={index} className='text-primary text-md md:text-lg lg:text-xl font-bold'>
              {index !== project.technologies.length - 1 ? tech + ' ,' : tech}
            </p>
          ))}
        </div>

        <Separator className='bg-gray-500 rounded-sm h-1 w-full ' />

        <div className='flex items-center gap-4'>
          <CiLink
            onClick={() => project.url && window.open(project.url)}
            className='text-white hover:text-primary cursor-pointer w-12 h-12'
          />
          <FaGithub className='text-white hover:text-primary cursor-pointer w-12 h-12' />
        </div>
      </div>

      <div className='lg:w-1/3 h-1/3 lg:h-3/4 relative lg:self-center'>
        <Image
          fill
          className='rounded-[24px] object-cover'
          src={project.image}
          alt={project.title}
        />
      </div>
    </CarouselItem>
  );
}

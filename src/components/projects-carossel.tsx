import { projects } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import ProjectItem from './project-item';
import {
    Carousel,
    CarouselApi,
    CarouselContent
} from './ui/carousel';

export default function ProjectsCarossel() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className='h-full grid grid-rows-[1fr_auto]'>
      <CarouselContent className='h-full w-full'>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </CarouselContent>
      <div className='flex gap-4 mt-12 justify-center self-end mb-12'>
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              api?.scrollTo(i);
              setCurrent(i);
            }}
            className={cn(
              current !== i ? 'bg-gray-500' : 'bg-primary',
              'w-3 h-3 sm:w-6 sm:h-6 rounded-full cursor-pointer'
            )}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}

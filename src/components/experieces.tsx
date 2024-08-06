'use client';
import { FaReact } from 'react-icons/fa';
import ExperiencesItem from './experience-item';
import { cn } from '@/lib/utils';

const Exp = [
  {
    Icon: FaReact,
    title: 'Development',
    description: 'Improving website visibility and search engine rankings',
    year: '2022 - Present',
    isRight: false
  },
  {
    Icon: FaReact,
    title: 'Development',
    description: 'Improving website visibility and search engine rankings',
    year: '2022 - Present',
    isRight: true
  },
  {
    Icon: FaReact,
    title: 'Development',
    description: 'Improving website visibility and search engine rankings',
    year: '2022 - Present',
    isRight: false
  },
  {
    Icon: FaReact,
    title: 'Development',
    description: 'Improving website visibility and search engine rankings',
    year: '2022 - Present',
    isRight: true
  }
];

export default function Experiences() {
  return (
    <div className='flex flex-col items-center space-y-16 mt-6 w-full'>
      <h1 className='sm:text-xl lmd:text-2xl xl:text-6xl text-white text-center font-bold'>
        My <span className='text-primary'>Experiences</span>
      </h1>

      <div className='w-[316px] ss:w-[416px] sm:w-[616px] xl:w-[832px] flex flex-col h-full'>
        {Exp.map((item, index) => (
          <div
            className={cn(
              item.isRight ? 'self-end' : 'flex-row-reverse self-start',
              'flex'
            )}
          >
            <div className='w-4 xl:w-8 h-full relative flex items-center justify-center'>
              <div className='w-1 xl:w-2 h-full bg-primary'></div>
              <div className='w-4 h-4 xl:w-8 xl:h-8 rounded-full bg-primary absolute z-10 top-1'></div>
            </div>
            <ExperiencesItem key={index} {...item} />
          </div>
        ))}
      </div>

      {/* <div className='w-[400px] sm:w-[600px] xl:w-[800px] flex flex-col items-center h-full'>
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight={false}
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight={false}
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight={false}
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight={false}
        />
        <ExperiencesItem
          title='Web Development'
          description='Improving website visibility and search engine rankings'
          year='2022 - Present'
          isRight
        />
      </div> */}
      {}
    </div>
  );
}

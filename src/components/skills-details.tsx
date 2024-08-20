import React from 'react';
import { IconType } from 'react-icons/lib';
import { FaArrowLeft } from 'react-icons/fa6';

type SkillsProps = {
  open: boolean;
  setOpen: () => void;
  skill: {
    title: string;
    description: string;
    icons: IconType[];
    width: string;
    height: string;
  };
};
export default function SkillsDetails({ open, setOpen, skill }: SkillsProps) {
  return <>{open && 
  <div className='absolute z-50 bg-black top-0 right-0 w-full h-full border-2 border-primary'>
    <FaArrowLeft className='w-4 h-4 text-primary cursor-pointer' onClick={() => setOpen()} />
    
  </div>}</>;
}

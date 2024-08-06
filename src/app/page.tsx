'use client';
import Experiences from '@/components/experieces';
import HomePage from '@/components/Home';
import ServicesComponent from '@/components/services';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={`w-screen  flex flex-col items-center own-container p-0 hidescroll`}
    >
      <div className=' flex flex-col h-full w-full items-center pt-[15%] section px-4 sm:px-[7%]'>
        <HomePage />
      </div>

      <div className=' flex w-full flex-col h-screen items-center pt-[10%] section bg-foreground px-4 sm:px-[7%]'>
        <ServicesComponent />
      </div>

      <div className=' flex w-full flex-col h-screen items-center pt-[10%] section bg-foreground px-4 sm:px-[7%]'>
        <Experiences />
      </div>
    </div>
  );
}

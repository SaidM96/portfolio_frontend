'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { Button } from './ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer';
type Props = {
  homePageRefCall: () => void;
  experiencesRefCall: () => void;
  contactRefCall: () => void;
  skillsPageRefCall: () => void;
  selectedSection: 'Home' | 'Skills' | 'Experiences' | 'Contact me';
};

export default function Header({
  homePageRefCall,
  experiencesRefCall,
  contactRefCall,
  skillsPageRefCall,
  selectedSection
}: Props) {
  const NavItems = [
    {
      name: 'Home',
      scrollCallBack: homePageRefCall
    },
    {
      name: 'Skills',
      scrollCallBack: skillsPageRefCall
    },
    {
      name: 'Experiences',
      scrollCallBack: experiencesRefCall
    },
    {
      name: 'Contact me',
      scrollCallBack: contactRefCall
    }
  ];

   const handleDownload = () => {
     const fileUrl = '/saidmia.resume.pdf';
    //  window.location.href = fileUrl;
     window.open(fileUrl, '_blank');
   };

  return (
    <div
      style={{
        backdropFilter: 'blur(10px)'
      }}
      className='fixed z-10 flex items-center justify-between w-full px-4 sm:px-[7%] pb-4 sm:pb-6 pt-4 sm:pt-6 bg-transparent'
    >
      <p className='font-bold text-2xl 2xl:text-4xl text-white'>
        {'Said '}
        <span className='text-primary'>mia</span>
      </p>

      {/* dispayed in desktop screen */}
      <div className='lg:flex hidden items-center space-x-6'>
        <div className='flex items-center space-x-8 text-white'>
          {NavItems.map((item, index) => {
            return (
              <Button
                onClick={() => item.scrollCallBack()}
                className={cn(
                  selectedSection === item.name ? 'text-primary' : 'text-white',
                  'p-0 bg-transparent font-bold text-lg xl:text-xl 2xl:text-2xl hover:bg-transparent hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4'
                )}
                key={index}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

        <motion.button
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={handleDownload}
          className='sm:py-2 py-1 flex items-center gap-3 px-4 sm:px-6 bg-primary rounded-[24px] text-black text-sm font-bold'
        >
          <p className=''>Download Resume</p>
          <FiDownload className='w-6 h-6 ' />
        </motion.button>
      </div>

      {/* dispayed in desktop screen */}
      <Drawer>
        <DrawerTrigger className='border-2 bg-background border-primary justify-center gap-1 py-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex lg:hidden items-center px-1'>
          {['h-2 sm:h-4', 'h-4 sm:h-6', 'h-[20px] sm:h-8'].map(value => (
            <div
              key={value}
              className={cn(value, 'w-0.5 sm:w-1 bg-primary self-end')}
            ></div>
          ))}
        </DrawerTrigger>

        <DrawerContent className='flex flex-col justify-start w-full border-primry border-2 items-center'>
          <DrawerHeader className='space-y-4'>
            <DrawerTitle className='space-y-4'>
              {' '}
              <div className='flex flex-col items-center space-y-2 text-white'>
                {NavItems.map((item, index) => {
                  return (
                    <Button
                      onClick={() => item.scrollCallBack()}
                      className={cn(
                        selectedSection === item.name
                          ? 'text-primary'
                          : 'text-white',
                        'p-0 bg-transparent font-bold text-lg xl:text-2xl hover:bg-transparent hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4'
                      )}
                      key={index}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </div>
              <motion.button
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.95
                }}
                onClick={handleDownload}
                className='sm:py-2 py-1 flex items-center gap-3 px-4 sm:px-6 bg-primary rounded-[24px] text-black text-sm font-bold'
              >
                <p className=''>Download Resume</p>
                <FiDownload className='w-6 h-6' />
              </motion.button>
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

'use client';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoCallSharp } from 'react-icons/io5';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const Icons = [
  {
    Icon: FaLinkedin
  },
  {
    Icon: FaGithub
  },
  {
    Icon: IoCallSharp
  },
  {
    Icon: FaTwitter
  }
];

export default function HomePage() {
  return (
    <div className='flex h-full flex-col items-center xl:items-start xl:flex-row w-full text-white justify-center gap-10 lmd:justify-between'>
      <div className='flex h-1/2 flex-col xl:h-full justify-center space-y-3 sm:space-y-6 xl:justify-start  xl:pt-20 xl:items-start w-full xl:w-1/2 xl:order-none order-2 items-center text-center xl:text-start'>
        <div className='flex flex-col space-y-2 sm:space-y-4 text-white'>
          <h1 className='xl:text-6xl text-2xl font-bold'>
            Hi, My name is <span className='text-primary'>Said</span>
          </h1>

          <p className='lg:text-3xl text-xl font-bold'>
            I'm a{' '}
            <TypeAnimation
              className='text-primary'
              sequence={[
                'Frontend Developer',
                1000,
                'Mobile Developer',
                1000,
                'Full Stack Engineer',
                1000
              ]}
              speed={50}
              style={{ fontSize: '1.875rem' }}
              repeat={Infinity}
            />
          </p>

          <p className='xl:text-xl text-sm sm:text-lg font-bold py-4 sm:px-20 xl:px-0'>
            As a Full Stack Developer and a student at 1337 Coding school ( Part
            of 42 Network ), I am deeply passionate about computer science and
            problem-solving. My primary focus lies in web development, where I
            leverage my skills to create efficient, user-friendly solutions
          </p>
        </div>

        <div className='flex space-x-4 my-4'>
          {Icons.map((item, index) => {
            return (
              <motion.button
                key={index}
                className='sm:w-12 w-6 sm:h-12 h-6 border sm:border-2 border-primary rounded-full flex items-center text-primary hover:text-background hover:bg-primary justify-center'
                whileHover={{
                  scale: 1.3,
                  marginBottom: '6px',
                  y: -10
                }}
              >
                <item.Icon
                  key={index}
                  className='sm:w-6 sm:h-6 w-4 h-4 rounded-full'
                />
              </motion.button>
            );
          })}
        </div>

        <div className='flex space-x-4'>
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            className='sm:py-4 py-2 flex items-center gap-3 px-6 bg-primary rounded-[24px] text-black text-sm font-bold'
          >
            <p>Download Resume</p>
            <FiDownload className='w-6 h-6' />
          </motion.button>
        </div>
      </div>

      <motion.div
        whileHover={{}}
        className='relative xl:self-start self-center h-[200px] w-[200px] s:w-[250px] s:h-[250px] lmd:h-[600px] lmd:w-[600px] flex justify-center items-center order-1'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          className='h-[200px] w-[200px] s:w-[300px] s:h-[300px] lmd:h-[600px] lmd:w-[600px] '
        >
          <Image
            style={{
              transition: '0.5s ease-in-out'
            }}
            className='rounded-full'
            src='/smia_black.jpg'
            alt='me'
            fill
          />
        </motion.div>

        <motion.svg
          fill={'transparent'}
          viewBox={'0 0 500 500'}
          xmlns={'http://www.w3.org/2000/svg'}
          className={
            'absolute -bottom-5 md:-bottom-10 z-10 w-full h-full rounded-full p-0 bg-transparent'
          }
        >
          <motion.circle
            stroke={'hsl(var(--primary)'}
            strokeWidth={10}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            cx={253}
            cy={253}
            r={250}
            initial={{
              strokeDasharray: '15 120 25 25'
            }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
}

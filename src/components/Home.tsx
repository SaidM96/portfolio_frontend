'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';

const Icons = [
  {
    link: 'https://www.instagram.com/saidm2168/',
    Icon: FaInstagram
  },
  {
    link: 'https://github.com/SaidM96',
    Icon: FaGithub
  },
  {
    link: 'https://www.linkedin.com/in/said-mia/',
    Icon: FaLinkedin
  },
  {
    link: 'https://x.com/ondghoskop',
    Icon: FaTwitter
  }
];

export default function HomePage({
  scrollToContactMeCallBack
}: {
  scrollToContactMeCallBack: () => void;
}) {
  return (
    <div className='flex h-full flex-col items-center xl:items-start xl:pt-16 xl:flex-row w-full text-white justify-center gap-10 xl:justify-between '>
      <div className='flex h-1/2 flex-col xl:h-full justify-center space-y-3 sm:space-y-6 xl:justify-start  xl:pt-20 xl:items-start w-full xl:w-1/2 xl:order-none order-2 items-center text-center xl:text-start'>
        <div className='flex flex-col space-y-2 sm:space-y-4 text-white'>
          <h1 className='xl:text-3xl 2xl:text-6xl text-2xl font-bold'>
            Hi, My name is <span className='text-primary'>Said</span>
          </h1>

          <p className='2xl:text-3xl lg:text-2xl text-xl font-bold'>
            {"I'm a "}
            <TypeAnimation
              className='text-primary 2xl:text-3xl lg:text-2xl text-xl'
              sequence={[
                'Software Engineer',
                1000,
                'Web/Mobile Developer',
                1000,
                'Full Stack Developer',
                1000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>

          <p className='xl:text-xl text-sm sm:text-lg font-bold max-xl:w-3/4 max-xl:self-center xl:px-0'>
            {`I'm a software engineer and a student at 1337 Coding school ( Part
            of 42 Network ), I am deeply passionate about computer science and
            problem-solving. My primary focus lies in web/mobile development, where I
            leverage my skills to create efficient, user-friendly solutions`}
          </p>
        </div>

        <div className='flex space-x-4 my-4'>
          {Icons.map((item, index) => {
            return (
              <motion.button
                key={index}
                className='sm:w-12 w-8 sm:h-12 h-8 border sm:border-2 border-primary rounded-full flex items-center text-primary hover:text-background hover:bg-primary justify-center'
                whileHover={{
                  scale: 1.3,
                  marginBottom: '6px',
                  y: -10
                }}
              >
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  href={item.link}
                >
                  <item.Icon
                    key={index}
                    className='sm:w-6 sm:h-6 w-4 h-4 rounded-full'
                  />
                </Link>
              </motion.button>
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
          onClick={() => scrollToContactMeCallBack()}
          className='sm:py-4 py-2 flex items-center gap-3 px-6 hover:bg-primary hover:text-black bg-transparent border-2 border-primary text-primary rounded-[24px] text-black text-md font-bold'
        >
          <p>Hire me</p>
        </motion.button>
      </div>

      <Parallax>
        <motion.div
          whileHover={{}}
          className='relative xl:self-start self-center h-[200px] w-[200px] s:w-[250px] s:h-[250px] sm:h-[300px] sm:w-[300px] xl:h-[400px] xl:w-[400px] flex justify-center items-center mb-2 order-1'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            className='h-[200px] w-[200px] s:w-[250px] s:h-[250px] sm:h-[300px] sm:w-[300px] xl:h-[400px] xl:w-[400px]'
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
              r={240}
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
      </Parallax>
    </div>
  );
}

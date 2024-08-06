'use client'
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = [
  {
    Icon: FaReact,
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications with modern frameworks. \nCreating scalable and maintainable codebases. \nDelivering seamless user experiences across all devices.'
  },
  {
    Icon: FaReact,
    title: 'Mobile Development',
    description: 'Creating user-friendly mobile apps for both iOS and Android platforms. \nUtilizing the latest technologies for optimal performance. \nEnsuring intuitive and engaging user interfaces.'
  },
  {
    Icon: FaReact,
    title: 'Code Quality and Performance',
    description: 'Ensuring high standards in code quality and optimizing for peak performance. \nImplementing best practices for clean and efficient code. \nConducting thorough testing and performance tuning.'
  },
  {
    Icon: FaReact,
    title: 'SEO Optimization',
    description: 'Improving website visibility and search engine rankings through best practices. \nUtilizing keyword research and on-page optimization. \nTracking and analyzing performance to drive results.'
  }
];


export default function ServicesComponent() {
  return (
    <div className='flex flex-col items-center space-y-16 mt-6'>
      <h1 className='text-6xl text-white text-center font-bold'>
        My <span className='text-primary'>Services</span>
      </h1>

      <div className='grid xl:grid-cols-2 w-full text-white gap-4 md:gap-6 xl:gap-10'>
        {Services.map((item, index) => {
          return (
            <motion.div
              key={index}
              className='flex flex-col py-3 sm:py-6 text-black hover:text-primary text-center lmd:py-12 rounded-[24px] items-center space-y-2 sm:space-y-3 justify-center bg-primary hover:bg-white border border-primary'
            >
              <item.Icon className='text-2xl sm:text-6xl hover:text-primary' />
              <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold px-10'>
                {item.title}
              </h1>
              <p className='text-sm md:text-base lg:text-lg font-bold px-10 !text-black'>
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

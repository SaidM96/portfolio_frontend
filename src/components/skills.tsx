import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaDocker, FaGithub } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiCplusplus,
  SiGnubash,
  SiJavascript,
  SiReactquery,
  SiShadcnui,
  SiTypescript
} from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { TypeAnimation } from 'react-type-animation';
import { TbBrandFramerMotion } from 'react-icons/tb';

type Skill = {
  title: string;
  icons: IconType[];
  description: string;
};

const MySkills: Skill[] = [
  {
    title: '',
    icons: [SiJavascript, SiTypescript],
    description:
      'JavaScript is essential for dynamic web development, while TypeScript adds static typing for enhanced reliability. I’ve utilized these to create robust, maintainable web applications, improving code quality and developer experience.'
  },
  {
    title: 'React.js',
    icons: [FaReact],
    description:
      'React.js is a library for building user interfaces with a component-based approach. I’ve used it to create interactive and responsive UIs, efficiently managing state and enhancing the user experience.'
  },
  {
    title: 'Node.js',
    icons: [RiNodejsFill],
    description:
      'Node.js allows JavaScript to be used for server-side development, enabling scalable backend solutions. I’ve leveraged it to handle asynchronous operations, build APIs, and process real-time data efficiently.'
  },
  {
    title: 'React Query',
    icons: [SiReactquery],
    description:
      'React Query is a data-fetching library for Js / Ts . It has enhanced my ability to handle server state, optimizing data synchronization and providing a smoother user experience.'
  },
  {
    title: 'Next.js',
    icons: [RiNextjsFill],
    description:
      'Next.js is a React framework for server-side rendering (SSR) and static site generation (SSG). It’s helped me build SEO-friendly, performant web applications with advanced routing and API handling.'
  },
  {
    title: 'Redux',
    icons: [TbBrandRedux],
    description:
      'Redux is a state management tool for JavaScript applications, particularly with React. It has taught me how to manage complex application state centrally, simplifying debugging and testing processes.'
  },
  {
    title: 'Framer Motion',
    icons: [TbBrandFramerMotion],
    description:
      'Framer Motion is a powerful animation library for React. It has enabled me to create smooth, interactive animations and transitions, bringing dynamic, responsive experiences to web applications. With Framer Motion, I’ve enhanced user engagement by crafting animations that feel natural and perform well.'
  },
  {
    title: 'Shadcn UI',
    icons: [SiShadcnui],
    description:
      'Shadcn UI is a collection of modern UI components designed for web applications. It’s allowed me to implement consistent and accessible interfaces, improving the overall design and user experience.'
  },
  {
    title: 'Tailwind CSS',
    icons: [RiTailwindCssFill],
    description:
      'Tailwind CSS is a utility-first framework that simplifies styling with predefined classes. I’ve used it to quickly build responsive, custom designs without writing extensive CSS.'
  },
  {
    title: 'Git',
    icons: [FaGithub],
    description:
      'Git is a version control system essential for managing code changes and collaboration. It has helped me maintain project history, coordinate work in teams, and streamline the development process.'
  },
  {
    title: 'Docker',
    icons: [FaDocker],
    description:
      'Docker is a platform for containerizing applications, ensuring consistent environments across different stages. I’ve used it to simplify deployment, scaling, and maintaining reliable software environments.'
  },
  {
    title: 'Bash',
    icons: [SiGnubash],
    description:
      'Bash is a command-line shell for Unix-based systems, useful for scripting and automation. It’s enabled me to automate repetitive tasks, streamline workflows, and improve productivity through command-line operations.'
  }
];

export default function Skills() {
  const [seeDetails, setseeDetails] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className='flex flex-col items-center w-full h-full space-y-16 mt-6'>
      <h1 className='text-2xl sm:text-4xl  text-white text-center font-bold'>
        My <span className='text-primary'>Skills</span>
      </h1>
      <div className='flex mt-[5%] w-full 2xl:w-1/2 h-1/2 justify-center'>
        {!seeDetails ? (
          <div className=' grid grid-cols-2 w-full h-full md:grid-cols-3 gap-4 sm:gap-8'>
            {MySkills.map((skill, index) => (
              <div
                key={index}
                onClick={() => {
                  setseeDetails(true);
                  setSelectedSkill(skill);
                }}
                className={cn(
                  'h-12 sm:h-16 m-0',
                  'sm:border-2 flex cursor-pointer items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:!text-background rounded-[24px]'
                )}
              >
                {skill.icons.map((Icon, i) => (
                  <Icon key={i} className={cn('w-6 h-6 sm:w-8 sm:h-8')} />
                ))}
                <h3 className='flex max-s:hidden text-md sm:text-xl font-semibold'>
                  {skill.title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          selectedSkill && (
            <motion.div
              initial={{ width: 0, height: 0, borderRadius: '100%' }}
              animate={{
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                transition: { duration: 1 }
              }}
              className='overflow-hidden relative p-2 sm:p-6 gap-6 w-full 2xl:w-1/2 h-1/2 border-2 border-primary text-primary flex flex-col items-center justify-center'
            >
              <IoMdClose
                className='absolute top-5 right-5 w-8 h-8 cursor-pointer'
                onClick={() => setseeDetails(false)}
              />
              <div className='flex items-center justify-center gap-2'>
                {selectedSkill.icons.map((Icon, i) => (
                  <Icon key={i} className={cn('w-8 h-8 sm:w-16 sm:h-16')} />
                ))}

                <h3 className='text-md sm:text-xl font-semibold'>
                  {selectedSkill.title}
                </h3>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5
                }}
                className='text-md sm:text-xl font-semibold text-start max-sm:px-2 sm:text-center'
              >
                {selectedSkill.description}
              </motion.p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

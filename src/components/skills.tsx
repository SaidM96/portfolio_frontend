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
import { AiFillOpenAI } from 'react-icons/ai';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';

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
      'I am proficient in JavaScript and TypeScript, which form the backbone of my web development expertise. These languages have empowered me to build robust, scalable, and maintainable applications.'
  },
  {
    title: 'React.js',
    icons: [FaReact],
    description:
      'With React.js, I create dynamic and efficient user interfaces. By leveraging React Query and Redux, I manage data fetching, caching, and complex state management, ensuring a seamless and scalable user experience in my applications.'
  },
  {
    title: 'Node.js',
    icons: [RiNodejsFill],
    description:
      'With Node.js, I build efficient server-side applications and RESTful APIs. It has deepened my understanding of backend development, enabling me to create seamless full-stack applications.'
  },
  {
    title: 'React Native',
    icons: [TbBrandReactNative],
    description:
      'React Native allows me to build cross-platform mobile applications using JavaScript, delivering high-quality native experiences for both iOS and Android devices.'
  },
  {
    title: 'Next.js',
    icons: [RiNextjsFill],
    description:
      'Next.js allows me to build full-stack React applications with server-side rendering and static site generation. This has significantly improved my skills in SEO and web performance optimization.'
  },
  {
    title: 'Redux',
    icons: [TbBrandRedux],
    description:
      'Redux is my go-to for managing complex application states. It has been crucial in maintaining predictable and consistent state management in large-scale projects.'
  },
  {
    title: 'Framer Motion',
    icons: [TbBrandFramerMotion],
    description:
      'Framer Motion enables me to create smooth and interactive animations, enhancing the user experience of my applications. It has been key in bringing interfaces to life.'
  },
  {
    title: 'Shadcn UI',
    icons: [SiShadcnui],
    description:
      'I use Shadcn UI to build accessible and customizable UI components. This tool has allowed me to craft user-friendly interfaces that prioritize both form and function.'
  },
  {
    title: 'Tailwind CSS',
    icons: [RiTailwindCssFill],
    description:
      'Tailwind CSS is my preferred utility-first CSS framework for rapid UI development. It has streamlined my design process and ensured consistency across projects.'
  },
  {
    title: 'Git',
    icons: [FaGithub],
    description:
      'Git is essential to my workflow, enabling effective version control and collaboration. It has been vital in managing and deploying code across diverse projects and teams.'
  },
  {
    title: 'OpenAI',
    icons: [AiFillOpenAI],
    description:
      'I leverage OpenAI tools to integrate cutting-edge AI features into applications. This has broadened my understanding of AI’s potential in enhancing modern software.'
  },
  {
    title: 'C++',
    icons: [BiLogoCPlusPlus],
    description:
      'With a strong foundation in C/C++, I have mastered memory management and implemented complex algorithms. These languages have solidified my understanding of core computer science principles.'
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
                  'border sm:border-2 flex cursor-pointer items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:!text-background rounded-[24px]'
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

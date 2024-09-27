import { AiFillOpenAI } from 'react-icons/ai';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript, SiShadcnui, SiTypescript } from 'react-icons/si';
import {
    TbBrandFramerMotion,
    TbBrandReactNative,
    TbBrandRedux
} from 'react-icons/tb';

export type Skill = {
  title: string;
  icons: IconType[];
  description: string;
};

export const MySkills: Skill[] = [
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

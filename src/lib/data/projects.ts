export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  gitLink?: string;
};

export const projects: Project[] = [
  {
    title: 'Loan Application Platform',
    description:
      'Lendstack Journey is a loan application platform that guides users through a simple, secure process including AI-powered chat support, KYC verification, document uploads, and bank linking. Users can track all applications in one place, and once approved, they can e-sign contracts for easy completion. The platform ensures a smooth, transparent experience from start to finish.',
    image: '/lendstack_logo.jpeg',
    technologies: [
      'Regula',
      'openAi',
      'Daman e-Sign',
      'Nextjs',
      'Nestjs',
      'Typescript',
      'Prisma',
      'PostgreSql',
      'Tailwindcss'
    ]
  },
  {
    title: 'Activia Challenge',
    description:
      'The Activia Challenge was an website developed for Danone to engage customers through product interaction and rewards. The project spanned 14 days, during which users could scan Danone products to win a variety of gifts. A key aspect of this challenge was the deployment of an AI system capable of recognizing Danone products, ensuring a seamless and accurate scanning experience.',
    image: '/lendstack_logo.jpeg',
    technologies: [
      'React',
      'Nextjs',
      'Nestjs',
      'Typescript',
      'Prisma',
      'PostgreSql',
      'Tailwindcss'
    ]
  },
  {
    title: 'Hyper Tube',
    description:
      'Hypertube is a web-based streaming platform project that is part of the 42 school curriculum. The objective of this project is to build a movie streaming service where users can search for movies, stream them, and interact with other users. It focuses on full-stack development and integrates several technologies, combining front-end, back-end, and API development.',
    image: '/lendstack_logo.jpeg',
    technologies: ['React', 'Nextjs', 'Typescript', 'Tailwindcss']
  },
  {
    title: 'Matcha',
    description:
      'Matcha is a dating platform project in the 42 curriculum. The goal of this project is to build a fully functional dating application where users can create profiles, match with others based on preferences, and interact with potential matches. It focuses on full-stack development and incorporates various technologies for user interaction, security, and real-time features.',
    image: '/lendstack_logo.jpeg',
    technologies: [
      'React',
      'Nextjs',
      'Express Js',
      'Typescript',
      'Tailwindcss',
      'Neo4j'
    ]
  }
];

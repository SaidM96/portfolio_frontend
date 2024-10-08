import { useEffect, useRef, useState } from 'react';

export type SectionInView = 'Home' | 'Skills' | 'Experiences' | 'Projects' |'Contact me';
export default function useHandleScroll() {
  const homePageRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [sectionInView, setSectionInView] = useState<SectionInView>('Home');

  const NavItems: { name: SectionInView; ref: React.RefObject<HTMLDivElement> }[] = [
    {
      name: 'Home',
      ref: homePageRef
    },
    {
      name: 'Skills',
      ref: skillsRef
    },
    {
      name: 'Experiences',
      ref: experiencesRef
    },
    // {
    //   name: 'Projects',
    //   ref: projectsRef
    // },
    {
      name: 'Contact me',
      ref: contactRef
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = NavItems.find(
              section => section.ref.current === entry.target
            );
            if (section) {
              setSectionInView(
                section.name
              );
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.75 // Trigger when 75% of the section is in view
      }
    );

    NavItems.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  });

  return {
    homePageRef: homePageRef,
    skillsRef: skillsRef,
    experiencesRef: experiencesRef,
    projectsRef: projectsRef,
    contactRef: contactRef,
    sectionInView: sectionInView
  };
}

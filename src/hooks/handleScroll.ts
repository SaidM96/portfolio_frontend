import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type SectionInView =
  | 'Home'
  | 'Skills'
  | 'Experiences'
  | 'Projects'
  | 'Contact me';

export default function useHandleScroll() {
  const homePageRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [sectionInView, setSectionInView] = useState<SectionInView>('Home');

  const NavItems: {
    name: SectionInView;
    ref: React.RefObject<HTMLDivElement>;
  }[] = useMemo(() => [
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
    {
      name: 'Projects',
      ref: projectsRef
    },
    {
      name: 'Contact me',
      ref: contactRef
    }
  ], [homePageRef, skillsRef, experiencesRef, projectsRef, contactRef]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        const section = NavItems.find(
          item => item.ref.current === entries[0].target
        );
        if (section) {
          setSectionInView(section.name);
        }
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.75
    });

    NavItems.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

  // Cleanup observer on unmount
    return () => {
      NavItems.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect()
    };
  }, [ handleIntersection ]);

  return {
    homePageRef: homePageRef,
    skillsRef: skillsRef,
    experiencesRef: experiencesRef,
    projectsRef: projectsRef,
    contactRef: contactRef,
    sectionInView: sectionInView
  };
}

'use client';
import Contact from '@/components/contact';
import Experiences from '@/components/experieces';
import Header from '@/components/header';
import HomePage from '@/components/Home';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import useHandleScroll from '@/hooks/handleScroll';
export default function Home() {
  const scrollToPage = (ref: React.RefObject<HTMLDivElement>) => {
    ref && ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    sectionInView,
    homePageRef,
    experiencesRef,
    projectsRef,
    contactRef,
    skillsRef
  } = useHandleScroll();

  return (
    <div className={`own-container w-screen items-center overflow-y-auto `}>
      <Header
        selectedSection={sectionInView}
        skillsPageRefCall={scrollToPage.bind(null, skillsRef)}
        homePageRefCall={scrollToPage.bind(null, homePageRef)}
        experiencesRefCall={scrollToPage.bind(null, experiencesRef)}
        projectsRefCall={scrollToPage.bind(null, projectsRef)}
        contactRefCall={scrollToPage.bind(null, contactRef)}
      />

      <section
        ref={homePageRef}
        className='flex section flex-col h-full w-full items-center pt-14 sm:pt-20 px-4 sm:px-[7%]'
      >
        <HomePage
          scrollToContactMeCallBack={scrollToPage.bind(null, contactRef)}
        />
      </section>

      <section
        ref={skillsRef}
        className='flex section w-full flex-col items-center pt-14 sm:pt-20 px-4 sm:px-[7%]'
      >
        <Skills />
      </section>

      <section
        ref={experiencesRef}
        className='flex section w-full flex-col items-center  pt-14 sm:pt-20 px-4 sm:px-[7%]'
      >
        <Experiences />
      </section>

      <section
        ref={projectsRef}
        className='flex section w-full flex-col items-center  pt-14 sm:pt-20 px-4 sm:px-[7%]'
      >
        <Projects />
      </section>

      <section
        ref={contactRef}
        className='flex section w-full flex-col h-full items-center bg-foreground pt-14 sm:pt-20 px-4 sm:px-[7%]'
      >
        <Contact />
      </section>
    </div>
  );
}

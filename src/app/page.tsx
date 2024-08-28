'use client';
import Contact from '@/components/contact';
import Experiences from '@/components/experieces';
import Header from '@/components/header';
import HomePage from '@/components/Home';
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
    contactRef,
    skillsRef
  } = useHandleScroll();

  return (
    <div className={`own-container w-screen items-center p-0 overflow-y-auto `}>
      <Header
        selectedSection={sectionInView}
        skillsPageRefCall={scrollToPage.bind(null, skillsRef)}
        homePageRefCall={scrollToPage.bind(null, homePageRef)}
        experiencesRefCall={scrollToPage.bind(null, experiencesRef)}
        contactRefCall={scrollToPage.bind(null, contactRef)}
      />

      <section
        ref={homePageRef}
        className='flex section flex-col h-full w-full items-center pt-12 lg:pt-20 xl:pt-[15%] px-4 sm:px-[7%]'
      >
        <HomePage
          scrollToContactMeCallBack={scrollToPage.bind(null, contactRef)}
        />
      </section>

      <section
        ref={skillsRef}
        className='flex section w-full flex-col items-center pt-[10%] px-4 sm:px-[7%]'
      >
        <Skills />
      </section>

      <section
        ref={experiencesRef}
        className='flex section w-full flex-col items-center pt-[5%] px-4 sm:px-[7%]'
      >
        <Experiences />
      </section>

      <section
        ref={contactRef}
        className='flex section w-full flex-col h-full items-center bg-foreground pt-[16%] lg:pt-[12%] xl:pt-[10%] px-4 sm:px-[7%]'
      >
        <Contact />
      </section>
    </div>
  );
}

import ProjectsCarossel from "./projects-carossel";

export default function Projects() {

  return (
    <div className='flex flex-col items-center w-full h-full space-y-16 mt-12'>
      <h1 className='text-2xl sm:text-4xl  text-white text-center font-bold'>
        Latest <span className='text-primary'>Projects</span>
      </h1>
       <ProjectsCarossel />
    </div>
  );
}

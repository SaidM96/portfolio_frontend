import { MySkills, Skill } from '@/lib/data/skillls';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Skills() {
  const [seeDetails, setseeDetails] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className='flex flex-col items-center w-full h-full space-y-16 mt-12'>
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

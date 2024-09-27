import { IconType } from 'react-icons/lib';
import TimelineItem from './time-line-item';
import { cn } from '@/lib/utils';


type ElementsType = {
  title: string;
  description: string;
  year: string;
  metadata: {};
};
type TimelineItemProps = {
  elements: ElementsType[];
};
export default function TimeLine({ elements }: TimelineItemProps) {
  return (
    <div className='w-[266px] sm:w-[616px] xl:w-[832px] flex flex-col h-full'>
      {elements.map((item, index) => (
        <div
          key={index}
          className={cn(
            index % 2 !== 0 ? 'self-end flex-row-reverse' : 'self-start',
            'flex max-sm:!flex-row-reverse max-sm:!self-start'
          )}
        >
          <TimelineItem
            {...item}
            isRight={index % 2 !== 0}
          />
          <div className='w-4 xl:w-8 h-full relative flex items-center justify-center'>
            <div className='w-1 xl:w-2 h-full bg-primary'></div>
            <div className='w-4 h-4 xl:w-8 xl:h-8 rounded-full bg-primary absolute z-10 top-1'></div>
          </div>
        </div>
      ))}
    </div>
  );
}

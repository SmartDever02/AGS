import { useEffect, useState } from 'react';
import RoadmapItem from '../../components/landing/roadmap/item';
import SpecialHeading from '../../components/typhography/specialHeading';

import circle_left from '../../resources/images/landing/roadmap/circle_left.svg';
import circle_right from '../../resources/images/landing/roadmap/circle_right.svg';

const RoadmapSection = ({ animation }: { animation: boolean }) => {
  return (
    <section className='roadmap relative pb-[200px] lg:pb-[150px]'>
      <SpecialHeading backText='roadmap' large>
        <span className='font-bold text-[22px] md:text-[32px] lg:text-[32px] xl:text-[42px] 2xl:text-[2.2vw] text-white uppercase'>
          The journey of Ags
        </span>
      </SpecialHeading>
      <div className='pt-[40px] xl:pt-[60px] 2xl:px-0 2xl:max-w-[1600px] 2xl:mx-auto overflow-hidden'>
        <div
          className={`relative -translate-x-[84vw] lg:-translate-x-[200px] xl:-translate-x-0 w-[90%] lg:w-1/2 border-r-[2.5px] border-r-[#4B4B4BCC] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[57px]`}
        >
          {animation && (
            <span className='roadbar absolute w-[2.5px] h-0 bg-white right-0 translate-x-[100%]' />
          )}
          <RoadmapItem index={1} active={animation} />
          <RoadmapItem index={2} active={animation} />
          <RoadmapItem index={3} active={animation} />
          <RoadmapItem index={4} active={animation} />
        </div>
      </div>
      <div className='circle_images'>
        <img
          src={circle_left}
          alt='left'
          className='absolute left-0 hidden lg:block top-[450px] xl:top-[600px]'
        />
        <img
          src={circle_right}
          alt='left'
          className='absolute right-0 hidden lg:block top-[700px] xl:top-[900px]'
        />
      </div>
    </section>
  );
};

export default RoadmapSection;

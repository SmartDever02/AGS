import { Element } from 'react-scroll';

import Ellipse from '../../components/animBack/ellipse';
import TeamCard from '../../components/landing/team/TeamCard';
import SpecialHeading from '../../components/typhography/specialHeading';
import rocket from '../../resources/images/landing/team/rocket.svg';

const TeamSection = () => {
  return (
    <section className='w-screen relative pb-[90px] lg:pb-[160px] pt-[140px] lg:pt-[200px] xl:pt-[15vw] bg-[url("resources/images/landing/team/teamBack.png")] bg-cover 2xl:px-[4vw]'>
      <div className='background'>
        <img
          src={rocket}
          alt='rocekt'
          className='absolute w-[100px] lg:w-auto -translate-y-[300px] md:-translate-y-[320px] lg:-translate-y-[490px] xl:-translate-y-[510px] 2xl:-translate-y-[30vw] translate-x-[54vw] sm:translate-x-[40vw] md:translate-x-[18vw] lg:translate-x-[9.5vw] xl:translate-x-[11.5vw] 2xl:translate-x-[10vw]'
        />
        <div className='absolute -rotate-[120deg] -top-[600px] -left-[200px] blur-[300px]'>
          <Ellipse width={850} height={850} gradient />
        </div>
        <div className='absolute -top-[1150px] left-1/2 -translate-x-1/2 blur-[300px]'>
          <Ellipse width={1020} height={768} gradient />
        </div>
      </div>
      <Element name='TEAM' className='element'>
        <SpecialHeading backText='team' large>
          <span className='uppercase text-white font-bold text-[22px] md:text-[32px] lg:text-[42px] 2xl:text-[2.5vw]'>
            meet our team
          </span>
        </SpecialHeading>
      </Element>
      <div className='pt-[35px] lg:pt-[75px] px-[30px] md:px-[60px] xl:px-[120px] 2xl:px-0 flex flex-col lg:flex-row gap-[20px] xl:gap-[40px] z-[10] flex-wrap justify-center'>
        <TeamCard index={1} />
        <TeamCard index={2} />
        <TeamCard index={3} />
        <TeamCard index={3} />
        <TeamCard index={3} />
      </div>
    </section>
  );
};

export default TeamSection;

import AGSBoys from '../../components/landing/home/AGSBoys';
import AnimateTape from '../../components/landing/home/AnimateTape';
import SocialGroup from '../../components/socialLinks/socialGroup';
import inlineImg1 from '../../resources/images/landing/banner/intitle/inline_1.svg';
import inlineImg2 from '../../resources/images/landing/banner/intitle/inline_2.svg';

import curve_1 from '../../resources/images/landing/banner/back/curve_1.svg';
import star from '../../resources/images/landing/banner/back/star.svg';
import Ellipse from '../../components/animBack/ellipse';

const HomeSection = () => {
  return (
    <section className='relative pt-[120px] lg:pt-[100px] xl:pt-[160px] 2xl:pt-[8vw] pb-[20px] lg:pb-[120px] xl:pb-[180px] flex flex-col items-center text-[30px] sm:text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[3vw] text-white'>
      {/* Animational Background */}
      <div className='background'>
        <img
          src={star}
          alt='star'
          className='hidden lg:block absolute left-0 lg:-translate-y-[220px] xl:-translate-y-[270px] 2xl:-translate-y-[320px] lg:-translate-x-[50px] xl:translate-x-[3.5vw] 2xl:translate-x-[6.5vw] animate-pulse'
        />
        <img
          src={curve_1}
          alt='curve_1'
          className='absolute left-0 -translate-x-[20px] xl:translate-x-0 translate-y-[150px] xl:translate-y-[270px] animate-pulse'
        />
        <div className='absolute left-0 -rotate-[180deg] -translate-y-[900px] -translate-x-[500px] blur-[300px]'>
          <Ellipse width={786} height={786} />
        </div>
        <div className='absolute left-0 blur-[118px]  -translate-y-[680px] -translate-x-[360px]'>
          <Ellipse width={602} height={465} gradient />
        </div>
        <div className='absolute right-0 blur-[160px] -translate-y-[420px] translate-x-[350px] rotate-[80deg]'>
          <Ellipse width={786} height={786} gradient />
        </div>
        <div className='absolute top-[500px] left-[300px] blur-[300px]'>
          <Ellipse width={1020} height={768} gradient />
        </div>
        <div className='absolute w-[378px] h-[536px] -top-[10px] -right-[160px] bg-gradient-to-b from-[#184BFF55] to-[#174AFF] blur-[200px] opacity-0 lg:opcity-100'></div>
        <div className='absolute top-[600px] -translate-x-[300px] -rotate-[75deg]'>
          <Ellipse />
        </div>
      </div>

      <div className='tracking-[5%] relative lg:flex items-center gap-[15px] uppercase z-[10]'>
        <img
          src={inlineImg1}
          alt='inline_1'
          className='order-1 lg:order-2 w-[180px] xl:w-auto absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 -top-[70px] lg:static opacity-40 lg:opacity-100 -z-[1]'
        />
        <div className='order-2 lg:order-1'>Introducing</div>
      </div>
      <div className='text-center mt-[10px] lg:mt-[30px] mb-[15px] lg:mb-[45px] relative lg:flex items-center gap-[15px] font-bold uppercase z-[10]'>
        <img
          src={inlineImg2}
          alt='inline_2'
          className='absolute hidden lg:block left-1/2 -translate-x-1/2 lg:-translate-x-0 top-[180px] opacity-40 lg:opacity-100 lg:static w-[160px] xl:w-auto -z-[1]'
        />
        <span>Alter Grimace Society</span>
      </div>
      <SocialGroup />
      <div className='w-full 2xl:max-w-[70vw] 2xl:mx-auto flex justify-between'>
        <AGSBoys />
        <AGSBoys right />
      </div>
      <div className='pt-[100px] lg:pt-[40px]'>
        <AnimateTape />
        <AnimateTape pink />
      </div>
    </section>
  );
};

export default HomeSection;

import Ellipse from '../../components/animBack/ellipse';
import starRing from '../../resources/images/landing/banner/back/star.svg';
import rocket from '../../resources/images/landing/team/rocket.svg';

import top_ags from '../../resources/images/mint/top_ags.svg';
import bottomLeft from '../../resources/images/mint/bottomLeft.svg';
import bottomRight from '../../resources/images/mint/bottomRight.svg';
const MintAnimBackground = () => {
  return (
    <>
      <div className='animational-back'>
        <img
          className='absolute top-0 left-[30px] 2xl:left-[6vw]'
          alt='starRing'
          src={starRing}
        />
        <img
          className='rotate-[120deg] absolute top-[130px] left-[150px] 2xl:top-[10vw] 2xl:left:[12vw]'
          src={rocket}
          alt='rocket'
        />
        <div className='absolute rotate-[120deg] blur-[300px]'>
          <Ellipse width={786} height={786} gradient />
        </div>
        <div className='absolute rotate-[50deg] -top-[300px] lg:-right-[600px] xl:-right-[300px] blur-[150px] opacity-60 xl:opacity-100'>
          <Ellipse width={786} height={786} gradient />
        </div>
        <div className='absolute w-[378px] h-[536px] top-[10px] -right-[100px] bg-gradient-to-b from-[#184BFF55] to-[#174AFF] blur-[300px]' />
        <div className='absolute -rotate-[75deg] top-[600px] right-0'>
          <Ellipse />
        </div>
        <div className='absolute top-[830px] lg:-left-[200px] xl:left-[140px] rotate-180 blur-[300px]'>
          <Ellipse width={602} height={465} gradient />
        </div>
      </div>
      <div className='image_group'>
        {/* <img
          alt='top_ags'
          src={top_ags}
          className='absolute xl:top-[50px] 2xl:top-[6vw] left-1/2 -translate-x-1/2 xl:z-[1]'
        /> */}
        <img
          alt='bottomLeft'
          src={bottomLeft}
          className='absolute hover:scale-110 transition-all duration-150 -bottom-[70px] md:-bottom-[150px] xl:-bottom-[100px] xl:left-[10px] 2xl:left-[5vw] xl:z-[1] 2xl:z-[0] md:w-[50vw] lg:w-[35vw]'
        />
        <img
          alt='bottomRight'
          src={bottomRight}
          className='absolute hover:scale-110 transition-all duration-150 -bottom-[150px] xl:-bottom-[300px] right-0 xl:right-[10px] hidden md:block 2xl:right-[5vw] xl:z-[1] 2xl:z-[0] w-[50vw] lg:w-[35vw]'
        />
      </div>
    </>
  );
};

export default MintAnimBackground;

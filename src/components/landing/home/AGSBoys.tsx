import ags_1 from '../../../resources/images/landing/banner/ags_1.svg';
import ags_2 from '../../../resources/images/landing/banner/ags_2.svg';
import ags_3 from '../../../resources/images/landing/banner/ags_3.svg';

const AGSBoys = ({ right }: { right?: boolean }) => {
  const leftOne = (
    <>
      <img
        src={ags_1}
        alt='ags_1'
        className='w-[200px] xl:w-[257px] -rotate-[15deg] -translate-x-[100px] lg:-translate-y-[60px] xl:-translate-y-[120px]'
      />
      <img
        src={ags_2}
        alt='ags_2'
        className='lg:w-[180px] xl:w-[206px] -translate-x-[140px] xl:-translate-x-[150px]'
      />
      <img
        src={ags_3}
        alt='ags_3'
        className='lg:w-[205px] xl:w-[260px] -translate-x-[220px] xl:-translate-x-[180px] translate-y-[45px]'
      />
    </>
  );
  const rightOne = (
    <>
      <img
        src={ags_2}
        alt='ags_2'
        className='order-2 w-[140px] lg:w-[200px] xl:w-[252px] rotate-[10deg] lg:-translate-y-[20px] xl:-translate-y-[40px] translate-x-[70px] lg:translate-x-[100px] xl:translate-x-[150px]'
      />
      <img
        src={ags_1}
        alt='ags_1'
        className='order-1 lg:w-[205px] xl:w-[258px] translate-y-[50px] translate-x-[180px]'
      />
      <img
        src={ags_3}
        alt='ags_3'
        className='order-3 lg:w-[185px] xl:w-[239px] rotate-[15deg] -translate-y-[100px] xl:-translate-y-[120px] translate-x-[30px] xl:translate-x-[120px]'
      />
    </>
  );

  return (
    <div
      className={`${
        right ? 'justify-end' : ''
      } lg:pt-[60px] xl:pt-[120px] pb-[20px] lg:pb-[50px] w-full hidden lg:flex`}
    >
      {right ? rightOne : leftOne}
    </div>
  );
};

export default AGSBoys;

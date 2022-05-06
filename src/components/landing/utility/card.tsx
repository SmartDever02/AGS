import Text16 from '../../typhography/text16';
import icon_1 from '../../../resources/images/landing/utility/icon_1.svg';
import icon_2 from '../../../resources/images/landing/utility/icon_2.svg';
import icon_3 from '../../../resources/images/landing/utility/icon_3.svg';

const UtilityCard = ({
  index,
  title,
  content,
}: {
  index: number;
  title: string;
  content: string;
}) => {
  const icons = [
    <img src={icon_1} alt='icon1' className='w-[40px] lg:w-auto' />,
    <img src={icon_2} alt='icon2' className='w-[40px] lg:w-auto -rotate-180' />,
    <img src={icon_3} alt='icon3' className='w-[40px] lg:w-auto' />,
  ];

  return (
    <div className='relative w-full h-[400px] sm:h-[360px] md:h-[420px] last:h-[300px] md:last:h-[320px] lg:h-[600px]'>
      <div className='absolute left-1/2 -translate-x-1/2 -top-[60px] lg:-top-[120px] w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] bg-gradient-to-b from-[#3883D3] via-[#8252C3] to-[#a53c32] blur-[44px] rounded-full'></div>

      <div className='absolute pt-[80px] lg:pt-[180px] pb-[20px] lg:pb-[40px] px-[17px] bg-white bg-opacity-[0.15] backdrop-blur-[5px] rounded-[5px] z-10'>
        <h3 className='mb-[20px] md:text-[24px] lg:text-[20px] xl:text-[24px] text-white font-bold text-center'>
          {title}
        </h3>
        <Text16 pxSmall>{content}</Text16>
      </div>
      <div
        className={`group absolute flex justify-center items-center left-1/2 -translate-x-1/2 -top-[60px] lg:-top-[110px] w-[120px] h-[120px] lg:w-[220px] lg:h-[220px] rounded-full z-20 ${
          index % 2 === 0 ? 'utility-circle-down' : 'utility-circle-up'
        }`}
      >
        {icons[index - 1]}
      </div>
    </div>
  );
};

export default UtilityCard;

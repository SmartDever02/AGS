import ags_1 from '../../../resources/images/landing/about/ags_rect_1.svg';
import ags_2 from '../../../resources/images/landing/about/ags_rect_2.svg';
import ags_3 from '../../../resources/images/landing/about/ags_rect_3.svg';

const AGSBox = ({ index, toRight }: { index: number; toRight?: boolean }) => {
  const images = [
    <></>,
    <img src={ags_1} alt='ags_1' className='max-w-min' />,
    <img src={ags_2} alt='ags_2' className='max-w-min' />,
    <img src={ags_3} alt='ags_3' className='max-w-min' />,
  ];
  return (
    <div
      className={`AGSBox relative pt-[32px] scale-[0.25] md:scale-50 lg:scale-75 xl:scale-100 -mr-[210px] md:-mr-[130px] lg:-mr-[20px] xl:mr-[45px] ${
        toRight ? 'pr-[66px]' : 'pl-[66px]'
      }`}
    >
      {images[index]}
      <div
        className={`absolute top-0 w-[240px] h-[32px] from-[#00C2FF00] via-[#6B3E91cc] to-[#FF29C3] ${
          toRight
            ? '-skew-x-[65deg] left-[33px] bg-gradient-to-l'
            : 'skew-x-[65deg] left-[32px] bg-gradient-to-r'
        }`}
      />
      <div
        className={`absolute top-[15.5px] w-[66px] h-[290px] bg-gradient-to-b from-[#00C2FF00] via-[#6B3E91cc] to-[#FF29C3] ${
          toRight ? '-skew-y-[25deg] right-0' : 'skew-y-[25deg] left-0'
        }`}
      />
    </div>
  );
};

export default AGSBox;

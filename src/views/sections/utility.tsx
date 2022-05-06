import Ellipse from '../../components/animBack/ellipse';
import UtilityCard from '../../components/landing/utility/card';
import SpecialHeading from '../../components/typhography/specialHeading';
import Text16 from '../../components/typhography/text16';

const UtilitySection = () => {
  const cardTitle = 'BENIFITS & UTILITIES';
  const cardContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam tellus nulla sed ligula eget semper urna. Egestas pretium arcu cras malesuada sed. Eget auctor facilis';

  return (
    <section className='pb-[40px] md:pb-[80px] lg:pb-[170px] relative 2xl:max-w-[90vw] mx-auto'>
      <div className='background'>
        <div className='absolute left-1/2 -top-[400px] -translate-x-[200px] -rotate-[75deg]'>
          <Ellipse />
        </div>
        <div className='absolute -bottom-[170px] -right-[350px] blur-[177px] rotate-180'>
          <Ellipse width={600} height={465} gradient />
        </div>
        <div className='absolute blur-[300px] bottom-0 -left-[100px]'>
          <Ellipse width={768} height={768} gradient />
        </div>
        <div className='absolute w-[378px] h-[536px] -bottom-[150px] -left-[200px] opacity-70 bg-gradient-to-b from-[#184BFF55] to-[#174AFF] blur-[200px]'></div>
      </div>
      <SpecialHeading backText={'BENIFITS & UTILIes'}>
        <h3 className='text-[22px] md:text-[32px] lg:text-[32px] xl:text-[56px] 2xl:text-[2.5vw] text-white font-bold'>
          {'BENIFITS & UTILITIES'}
        </h3>
      </SpecialHeading>
      <Text16>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam tellus
        nulla sed ligula eget semper urna. Egestas pretium arcu cras malesuada
        sed. Eget auctor facilisis penatibus proin consequat. Maecenas feugiat
        vestibulum, id in.
      </Text16>
      <div className='pt-[140px] lg:pt-[200px] 2xl:pt-[10vw] px-[20px] md:px-[80px] lg:px-[180px] xl:px-[120px] 2xl:px-[5vw] flex flex-col xl:flex-row gap-[20px] 2xl:gap-[2vw]'>
        <UtilityCard index={1} title={cardTitle} content={cardContent} />
        <UtilityCard index={2} title={cardTitle} content={cardContent} />
        <UtilityCard index={3} title={cardTitle} content={cardContent} />
      </div>
    </section>
  );
};

export default UtilitySection;

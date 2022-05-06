import AGSBox from './agsBox';

const AGSBoxContainer = () => {
  const MakeBoxes = (toRight: boolean) => {
    let Boxes = [];

    for (let i = 0; i < 30; i++) {
      Boxes.push(<AGSBox index={(i % 3) + 1} toRight={toRight} />);
    }
    return Boxes;
  };

  return (
    <div className='ags-box-animation flex flex-col'>
      <div className='box-to-left w-[3000p] flex -mt-[150px] md:-mt-[90px]'>
        {MakeBoxes(false)}
      </div>
      <div className='box-to-right w-[3000p] flex -mt-[220px] md:-mt-[120px] lg:-mt-[50px] xl:mt-[50px]'>
        {MakeBoxes(true)}
      </div>
    </div>
  );
};

export default AGSBoxContainer;

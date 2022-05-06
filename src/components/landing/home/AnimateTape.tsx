const getAnimateText = (white?: boolean) => {
  const line = (
    <span
      className={`w-[40px] lg:w-[100px] xl:w-[150px] 2xl:w-[200px] h-[3px] ${
        white ? 'bg-black' : 'bg-white'
      }`}
    />
  );
  const append = (
    <>
      {line}
      <span>Alter GRIMACE Society</span>
      {line}
      <span>346+ Unique Nfts</span>
    </>
  );
  let append_text = [];
  for (let i = 0; i < 10; i++) {
    append_text.push(append);
  }
  return (
    <div
      className={`${
        white ? 'animation-content-white' : 'animation-content-gradient'
      }  flex justify-center items-center gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] w-full h-full`}
    >
      {append_text.map((one) => one)}
    </div>
  );
};

const AnimateTape = ({ pink }: { pink?: boolean }) => {
  const whiteTape = (
    <div
      className={`animate-tape rotate-0 animate-bounce lg:!animate-none lg:rotate-[5deg] 2xl:rotate-0 2xl:animate-bounce w-[8000px] md:w-[9000px] lg:w-[11000px] xl:w-[20000px] h-[32px] md:h-[48px] lg:h-[56px] xl:h-[74px] 2xl:h-[100px] bg-white text-black font-bold text-[16px] md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px]`}
    >
      {getAnimateText(true)}
    </div>
  );
  const pinkTape = (
    <div className='animate-tape lg:-rotate-[8deg] 2xl:-rotate-0 2xl:translate-y-0 lg:-translate-y-[40px] w-[8000px] md:w-[9000px] lg:w-[11000px] xl:w-[20000px] h-[32px] md:h-[48px] lg:h-[56px] xl:h-[74px] 2xl:h-[100px] bg-gradient-to-t from-[#CB1E8D] to-[#FFE08D] text-white font-bold text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px]'>
      {getAnimateText()}
    </div>
  );
  return pink ? pinkTape : whiteTape;
};

export default AnimateTape;

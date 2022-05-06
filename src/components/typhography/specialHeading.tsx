const SpecialHeading = ({
  backText,
  large,
  backLeft,
  children,
}: {
  backText: string;
  backLeft?: boolean;
  large?: boolean;
  children: any;
}) => {
  return (
    <div className='relative specHeading'>
      <div
        className={`backTitle animate-pulse uppercase opacity-30 tracking-[2px] ${
          backLeft
            ? 'translate-x-[100px] sm:translate-x-[150px] lg:-translate-x-[75px] 2xl:-translate-x-[5vw] text-center lg:text-left'
            : 'text-center'
        } ${
          large
            ? 'text-[50px] md:text-[80px] lg:text-[80px] xl:text-[128px] 2xl:text-[6vw]'
            : 'text-[30px] md:text-[60px] lg:text-[60px] xl:text-[100px] 2xl:text-[6vw]'
        }`}
      >
        {backText}
      </div>
      <div
        className={`absolute flex justify-center lg:block w-full lg:w-auto top-1/2 -translate-y-1/2 ${
          backLeft ? '' : 'lg:left-1/2 lg:-translate-x-1/2'
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default SpecialHeading;

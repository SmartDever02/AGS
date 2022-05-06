const Text16 = ({
  pxSmall,
  alignLeft,
  children,
}: {
  pxSmall?: boolean;
  alignLeft?: boolean;
  children: any;
}) => {
  return (
    <p
      className={`${
        pxSmall ? 'px-0' : 'px-[20px] lg:px-[50px] xl:px-[185px]'
      } ${
        alignLeft ? 'text-left' : 'text-center'
      } text-[#FFF9F9aa] text-[13px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[1vw] leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[32px]`}
    >
      {children}
    </p>
  );
};
export default Text16;

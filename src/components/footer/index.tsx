import Ellipse from '../animBack/ellipse';
import Logo from '../navbar/logo';
import SocialGroup from '../socialLinks/socialGroup';

const Footer = () => {
  return (
    <footer className='relative pt-[35px] lg:pt-[85px] xl:pt-[145px] pb-[40px] lg:pb-[50px] px-[30px] lg:px-[100px] bg-[#2C1970] !bg-opacity-30 flex flex-col md:flex-row items-center overflow-hidden gap-[10px] lg:gap-0'>
      <div className='background'>
        <div className='absolute -bottom-[450px] left-[100px] lg:left-[450px]'>
          <Ellipse />
        </div>
      </div>
      <div className='order-2 md:order-1 w-full uppercase text-white text-[12px] lg:text-[12px] xl:text-[14px] opacity-60'>
        ©2022 HALFFACE. All rights reserved.
      </div>
      <div className='order-1 md:order-2 w-full flex justify-between'>
        <div className='md:-translate-x-1/2'>
          <Logo />
        </div>
        <SocialGroup noOriginal />
      </div>
    </footer>
  );
};

export default Footer;

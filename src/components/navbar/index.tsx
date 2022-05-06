import MintButton from '../button/mintButton';
import ConnectButton from '../ConnectButton/ConnectButton';
import Logo from './logo';
import NavMenu from './navMenu';

const Navbar = (props: navType) => {
  const startRoadmapAnim = () => {
    props.onRoad && props.onRoad(true);
  };

  return (
    <header
      className={`relative pt-[40px] xl:pt-[50px] lg:static flex items-center justify-between z-10 2xl:px-[10vw] ${
        props.mintPage
          ? 'px-[20px] md:px-[100px] lg:px-[120px] xl:px-[150px] '
          : 'px-[30px] sm:px-[50px] lg:px-[50px] xl:px-[150px] '
      }`}
    >
      {!props.mintPage && (
        <div
          onClick={() => props.setToggle(!props.toggle)}
          className='cursor-pointer lg:hidden w-[30px] flex flex-col gap-[7px]'
        >
          <span className='w-full h-[4px] rounded-full bg-white' />
          <span className='w-full h-[4px] rounded-full bg-white' />
          <span className='w-full h-[4px] rounded-full bg-white' />
        </div>
      )}
      <Logo mintPage={props.mintPage} top />
      <div className='flex gap-[25px] xl:gap-[45px]'>
        <div
          className={`${
            props.mintPage ? 'lg:hidden' : 'lg:flex'
          } hidden  items-center gap-[25px] xl:gap-[45px] text-white text-[12px] xl:text-[0.75vw]`}
        >
          <NavMenu
            startRoadmap={() => {
              startRoadmapAnim();
            }}
          />
        </div>
        <MintButton mintPage={props.mintPage} type='WHITE' />
        <div className={`${props.mintPage ? 'block' : 'hidden'}`}>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

interface navType {
  mintPage?: boolean;
  onRoad?: any;
  toggle?: boolean;
  setToggle?: any;
}

export default Navbar;

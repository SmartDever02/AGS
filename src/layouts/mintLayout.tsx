import Navbar from '../components/navbar';

const MintLayout = (props: landingType) => {
  return (
    <div className='bg-[#03041A] overflow-hidden flex flex-col relative'>
      <Navbar mintPage />
      {props.children}
    </div>
  );
};

interface landingType {
  children?: any;
}

export default MintLayout;

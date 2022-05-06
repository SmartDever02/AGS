import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar/sidebar';

import arrow_up from '../resources/images/landing/arrow_up.png';

const LandingLayout = (props: landingType) => {
  let [sidebar, setSidebar] = useState(false);
  return (
    <div className='bg-[#03041A] overflow-x-hidden flex flex-col relative'>
      <Navbar
        onRoad={(val: boolean) => props.startRoad(val)}
        toggle={sidebar}
        setToggle={(val: boolean) => setSidebar(val)}
      />
      {props.children}
      <Sidebar
        visible={sidebar}
        changeVisible={(value: boolean) => setSidebar(value)}
      />
      <Footer />

      {/* <img
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        src={arrow_up}
        alt='UP'
        className='fixed rounded-full opacity-70 backdrop-blur-lg mix-blend-darken cursor-pointer bottom-[40px] right-[40px] h-[50px] w-[50px] animate-bounce'
      /> */}
    </div>
  );
};

interface landingType {
  children?: any;
  startRoad: any;
}

export default LandingLayout;

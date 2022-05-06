import { Link as ScrollLink } from 'react-scroll';
const NavMenu = ({
  startRoadmap,
  available,
  onClick,
}: {
  startRoadmap?: any;
  available?: boolean;
  onClick?: any;
}) => {
  return (
    <>
      <ScrollLink
        onClick={onClick}
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : available && 'sidebar_link'}`}
        to='HOME'
        spy
        hashSpy
        smooth={true}
        offset={-300}
        duration={500}
      >
        HOME
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        to='ABOUT'
        spy
        hashSpy
        smooth={true}
        offset={0}
        duration={500}
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        WHAT IS AGS
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        to='UTILITY'
        spy
        hashSpy
        smooth={true}
        offset={0}
        duration={500}
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        {`BENIFITS & UTILITY`}
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        smooth={true}
        offset={0}
        duration={500}
        to='ROADMAP'
        spy
        hashSpy
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
        onSetActive={startRoadmap}
      >
        ROADMAP
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        smooth={true}
        offset={0}
        duration={500}
        to='TEAM'
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        OUR TEAM
      </ScrollLink>
      <ScrollLink
        onClick={onClick}
        smooth={true}
        offset={0}
        duration={500}
        to='FAQ'
        activeClass='nav_link_active'
        className={`${startRoadmap ? 'nav_link' : 'sidebar_link'}`}
      >
        FAQS
      </ScrollLink>
    </>
  );
};

export default NavMenu;

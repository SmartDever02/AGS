import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import LandingLayout from '../layouts/landingLayout';
import AboutSection from './sections/about';
import FAQSection from './sections/faq';
import HomeSection from './sections/home';
import RoadmapSection from './sections/roadmap';
import TeamSection from './sections/team';
import UtilitySection from './sections/utility';

export default function Landing() {
  let [animation, setAnimation] = useState(false);
  return (
    <LandingLayout startRoad={(val: boolean) => setAnimation(val)}>
      <Element name='HOME' className='element'>
        <HomeSection />
      </Element>
      <Element name='ABOUT' className='element'>
        <AboutSection />
      </Element>
      <Element name='UTILITY' className='element'>
        <UtilitySection />
      </Element>
      <Element name='ROADMAP' className='element'>
        <RoadmapSection animation={animation} />
      </Element>
      <TeamSection />

      <Element name='FAQ' className='element'>
        <FAQSection />
      </Element>
    </LandingLayout>
  );
}

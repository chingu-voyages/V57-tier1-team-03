
import React from 'react'
import OurTeam from '../components/Body/OurTeam.jsx'
import OurVision from '../components/Body/OurVision.jsx'

import HeroSection from "../components/Hero/Hero.jsx";
import ProcessSection from '../components/Body/Process.jsx';

const Home = () => {
  return (
    <>
     <HeroSection />
     <ProcessSection />
    <OurVision />
    <OurTeam />
    </>
  );
}
export default Home;


import React from 'react'
import OurTeam from '../components/OurTeam'
import OurVision from '../components/OurVision'

import HeroSection from "../components/Hero/Hero.jsx";
import BodySection from "../components/Body/Body.jsx";

const Home = () => {
  return (
    <>
     <HeroSection />
     <BodySection />
    <OurVision />
    <OurTeam />
    </>
  );

}
export default Home;

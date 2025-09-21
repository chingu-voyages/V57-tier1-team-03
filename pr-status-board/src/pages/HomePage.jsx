<<<<<<< HEAD
import HeroSection from "../components/Hero/Hero.jsx";
import BodySection from "../components/Body/Body.jsx";
function Home() {
  return (
    <>
      <HeroSection />
      <BodySection />
=======

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
>>>>>>> feat/header-and-footer
    </>
  );
}
export default Home;

"use client"
import React, { useEffect, useState } from 'react';
import LandingPage from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import FunEye from './Components/FunEye';
import Featured from './Components/Featured';
import Card from './Components/Card';
import Project from './Components/Project';
import Footer from './Components/Footer';

const Page = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    import('locomotive-scroll').then((LocomotiveModule) => {
      setLocomotiveScroll(new LocomotiveModule.default());
    });
  }, []);

  return (
    <>
      <LandingPage />
      <Marquee />
      <About />
      <FunEye />
      <Featured />
      <Card />
      <Project />
      <Footer />
    </>
  );
};

export default Page;

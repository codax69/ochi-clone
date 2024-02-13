'use client'
import React from 'react'
import LandingPage from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import FunEye from './Components/FunEye'
import Featured from './Components/Featured'
import LocomotiveScroll from 'locomotive-scroll';
import Card from './Components/Card'
import Project from './Components/Project'
import Footer from './Components/Footer'

const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <LandingPage/>
    <Marquee/>
    <About/>
    <FunEye/>
    <Featured/>
    <Card/>
    <Project/>
    <Footer/>
    </>
  )
}

export default page
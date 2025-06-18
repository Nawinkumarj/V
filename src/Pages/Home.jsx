import React from 'react'
import Banner from '../Components/Banner'
import Works from '../Components/Works'
import Contact from '../Pages/Contact'
import ScrollPage from '../Components/ScrollPage'
import { gsap, ScrollTrigger } from "../Components/gsapSetup";


const Home = () => {
  return (
    <div>
      <Banner />
      <Works />
      <ScrollPage/>
      <Contact />
    </div>
  )
}

export default Home

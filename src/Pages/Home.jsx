import React from 'react'
import Banner from '../Components/Banner'
import Works from '../Components/Works'
import Contact from '../Pages/Contact'
import ScrollPage from '../Components/ScrollPage'
import { gsap, ScrollTrigger } from "../Components/gsapSetup";
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Vcraftyu Company - A Digital Studio</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Vcraftyu Company - A Digital Studio" />
      </Helmet>
      <Banner />
      <Works />
      <ScrollPage/>
      <Contact />
    </div>
  )
}

export default Home

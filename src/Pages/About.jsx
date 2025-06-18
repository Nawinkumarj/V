import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Clients from "../Components/Clients";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";


const About = () => {
  const aboutRef = useRef([]);

  useEffect (() => {
    const ab = gsap.timeline({
      scrollTrigger:{
        trigger: aboutRef.current,
        start: "top 10%",
        end: "bottom 0%",

        scrub: 1,
      }
    });
    ab.fromTo(
      aboutRef.current,
      {
        y: 0, opacity: 1, scale: 1,
      },
      {
        y: "-10%", opacity: 0, scale: 0.6,
      }
    );
  },[]);
  return (
    <div className="about-section">
      <div className="aboutUs-container">
        <div className="aboutUs-content" ref={aboutRef}>
      <h1 className="about-heading">About</h1>
          <p className="aboutHeading" >At <span className="highlight-text">Vcraftyu</span>, we turn wild ideas into digital magic <img src={assets.m} alt="" /></p>
          <p className="aboutDescription">
            Born in <span className="highlight-text">2023</span> with nothing but a laptop and a dream, we’ve grown into a powerhouse
            of creators, coders, and <span className="highlight-text">caffeine-fueled</span>  problem solvers. We're not
            your average <span className="highlight-text">dev</span> team — we build sleek apps, bold websites, and
            <span className="highlight-text"> smart systems</span> that actually work. Every pixel, every line of code is
            crafted with purpose (and a bit of madness).<span className="highlight-text">Vcraftyu</span>  isn’t just our
            name — it’s our mindset. Let’s make something unforgettable.
          </p>
        </div>
      </div>
        {/* <Clients /> */}
          <Clients />
      </div>
  );
};

export default About;
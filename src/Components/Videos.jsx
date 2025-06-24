import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "./gsapSetup";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const videocontainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const vl = gsap.timeline({
      scrollTrigger: {
        trigger: videocontainerRef.current,
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
        pin: true,
        scroller: ".scroll-wrapper",
      },
    });

    vl.fromTo(
      videoRef.current,
      { y: 0, opacity: 0, scale: 0.2, duration: 1.5, ease: "power2.inOut" },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className="video-container" ref={videocontainerRef}>
      <video src={assets.video} autoPlay loop muted ref={videoRef}></video>
    </div>
  );
};

export default Videos;

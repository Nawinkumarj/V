import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "./gsapSetup";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const videocontainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop view (default)
      "(min-width: 768px)": function () {
        const vl = gsap.timeline({
          scrollTrigger: {
            trigger: videocontainerRef.current,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 1,
            pin: true,
            // scroller: ".scroll-wrapper",
          },
        });

        vl.fromTo(
          videoRef.current,
          { y: 0, opacity: 0, scale: 0.2, duration: 1.5, ease: "power2.inOut" },
          { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" }
        );
      },

      // Mobile view
      "(max-width: 767px)": function () {
        const vl = gsap.timeline({
          scrollTrigger: {
            trigger: videocontainerRef.current,
            start: "top 90%",   
            end: "bottom 30%",
            scrub: 1,
            pin: true,
            // scroller: ".scroll-wrapper",
          },
        });

        vl.fromTo(
          videoRef.current,
          { y: 0, opacity: 0, scale: 0.2, duration: 1.2, ease: "power2.inOut" },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.inOut" }
        );
      },
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="video-container" ref={videocontainerRef}>
      <video
        src={assets.video}
        autoPlay
        playsInline
        loop
        muted
        ref={videoRef}
        typeof="mp3"
      ></video>
    </div>
  );
};

export default Videos;

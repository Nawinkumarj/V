import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";

const Clients = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const clients = [
    assets.client1,
    assets.client2,
    assets.client3,
    assets.client4,
    assets.client5,
    assets.client6,
    assets.client7,
    assets.client8,
    assets.client9,
  ];

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) return;
    const track = trackRef.current;

    // Duplicate the logos for seamless looping
    const totalWidth = track.scrollWidth / 2;

    // GSAP infinite animation
    animationRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <div className="clients-Section">
      <div className="clients-Heading">
        <h1>Trustees</h1>
      </div>

      <div
        className="clients"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="clients-track" ref={trackRef}>
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="clientItem">
              <img src={client} alt={`client-${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";
import { GiRapidshareArrow } from "react-icons/gi";

const Works = () => {
  const workscontainerRef = useRef(null);
  const workRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workscontainerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        // markers: true,
        scroller: ".scroll-wrapper",
      },
    });

    workRefs.current.forEach((ref, i) => {
      tl.fromTo(
        ref,
        { y: 150, opacity: 0, scale: .7 },
        { y: 0, opacity: 1, scale: 1, duration: .5 },
        i * 0.6
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);
  return (
    <div className="ourWorks-container" ref={workscontainerRef}>
      <div className="ourWorks-heading">
        <h1>works</h1>
        <p><GiRapidshareArrow size={70} /></p>
      </div>
      <div className="ourWorks">
        {[assets.works1, assets.works2, assets.works3].map((img, i) => (
          <div
            key={i}
            className="ourWorks-item"
            ref={(el) => (workRefs.current[i] = el)}
          >
            <img src={img} alt={`work-${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

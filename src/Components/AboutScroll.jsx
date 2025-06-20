import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";
import { FaArrowDown } from "react-icons/fa";


const AboutScroll = () => {
  const workscontainerRef = useRef(null);
  const itemRefs = useRef([]);


  useEffect(() => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    if (!scrollWrapper) return;
    const sections = gsap.utils.toArray(".aboutscroll-item");
    const itemWidth = scrollWrapper.clientWidth / 2;
    const totalScrollWidth = itemWidth * (sections.length - 2);

    const tl = gsap.to(sections, {
      x: () => `-${totalScrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: workscontainerRef.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        scroller: ".scroll-wrapper",
      },
    });

    // Refresh scroll trigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  // Tilt effect
  const handleMouseMove = (e, index) => {
    const item = itemRefs.current[index];
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    item.querySelector(
      "img"
    ).style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const item = itemRefs.current[index];
    item.querySelector("img").style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="ourWorks-container" ref={workscontainerRef}>
      <div className="ourWorks-heading">
        <h1>branding</h1>
        <p><FaArrowDown size={70} /></p>
      </div>
      <div className="Aboutscroll">
        {[
          assets.abt_scroll1,
          assets.abt_scroll2,
          assets.abt_scroll3,
          assets.abt_scroll4,
          assets.abt_scroll5,
        ].map((img, i) => (
          <div
            key={i}
            className="aboutscroll-item"
            ref={(el) => (itemRefs.current[i] = el)}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <img src={img} alt={`work-${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutScroll;

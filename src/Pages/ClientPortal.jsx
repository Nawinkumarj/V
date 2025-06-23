import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";

const clientData = [
  {
    name: "Maxpro Consultancy",
    img: assets.works1,
    type: "Website",
  },
  {
    name: "Avinya Construction & Management",
    img: assets.works2,
    type: "Web App",
  },
  {
    // name: "Instyl Hair n Bridal Studio",
    name: "Jonak",
    img: assets.works3,
    type: "Mobile App",
  }

];

const ClientPortal = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    if (!scrollWrapper) return;

    const totalScrollWidth =
      scrollRef.current.scrollWidth - scrollWrapper.clientWidth;

    // Animate horizontal scroll of the .client-items container
    gsap.to(scrollRef.current, {
      x: () => `-${totalScrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        scroller: ".scroll-wrapper",
      },
    });

    // Animate individual cards when they appear
    itemRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { x: 550, y: 200 , opacity: 0, scale: .9 },
        {
          x: -100,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            scroller: ".scroll-wrapper",
            start: "left",
            end: "center",
            scrub: true,
          },
        }
      );
    });
    // Heading
        gsap.timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            scroller: ".scroll-wrapper",
            start: "top 10%",
            end: "top 10%",
            scrub: 2,
            pin: true,
          },
        }).fromTo(
          headingRef.current,
          { y: 0, opacity: 1, ease: "back.out(1.7)", duration: 3.5 },
          { y: -300, opacity: 1 , ease : "back.out(1.7)", duration: 2.5 },
        );
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="clientPortal" ref={containerRef}>
      <div className="client-heading" ref={headingRef}>
        <h1>Our Trustees</h1>
      </div>
      <div className="client-section">
        <div className="client-items" ref={scrollRef}>
          {clientData.map((client, index) => (
            <div
              className="client-item"
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="client-img">
                <img src={client.img} alt={client.name} />
              </div>
              <div className="client-info">
                <h1>{client.name}</h1>
                <p>{client.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;

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
    name: "Jonak",
    img: assets.works3,
    type: "Mobile App",
  },
  {
    name: "Instyl Hair n Bridal Studio",
    img: assets.works4,
    type: " 3d Website",
  }

];

const ClientPortal = () => {
    
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    if (!container || !scrollContainer) return;

    const waitForImages = () => {
      const images = container.querySelectorAll("img");
      let loadedCount = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === images.length) runGSAP();
          };
        }
      });

      if (loadedCount === images.length) {
        runGSAP();
      }
    };

    const runGSAP = () => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          const totalScrollWidth =
            scrollContainer.scrollWidth - container.offsetWidth;

          // Horizontal scroll
          gsap.to(scrollContainer, {
            x: `-${totalScrollWidth}px`,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `${totalScrollWidth * 2}px`,
              scrub: 2,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Animate each card
          itemRefs.current.forEach((ref) => {
            if (!ref) return;
            gsap.fromTo(
              ref,
              { x: 2000, y: 200, opacity: 0, scale: 0.9,
               },
              {
                x: -500,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: ref,
                  start: "top",
                  end: "bottom 20%",
                  scrub: .5,
                  // markers: true,
                },
              }
            );
          });

          // Heading animation
          gsap
            .timeline({
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 10%",
                end: "top 10%",
                scrub: 2,
                pin: true,
                anticipatePin: 1,
              },
            })
            .fromTo(
              headingRef.current,
              { y: 0, opacity: 1 },
              { y: -300, opacity: 1, ease: "back.out(1.7)", duration: 2.5 }
            );
        },
      });

      ScrollTrigger.refresh();
    };

    waitForImages();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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

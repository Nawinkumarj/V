import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";

const clientData = [
  {
    name: "Maxpro Consultancy",
    img: assets.works1,
    type: "Website",
    year: "2024"
  },
  {
    name: "Avinya Construction & Management",
    img: assets.works2,
    type: "Web App",
    year:"2023"
  },
  {
    name: "Jonak",
    img: assets.works3,
    type: "Mobile App",
    year: "2023"
  },
  {
    name: "Instyl Hair n Bridal Studio",
    img: assets.works4,
    type: " 3d Website",
    year: "2024"
  },
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
              { x: 2000, y: 200, opacity: 1, scale: 0.9 },
              {
                x: -500,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: ref,
                  start: "top 20%",
                  end: "bottom 20%",
                  scrub: 0.5,
                  markers: true,
                },
              }
            );
          });

          // Heading animation
          gsap
            .timeline({
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 40%",
                end: "top 30%",
                scrub: 2,
                pin: true,
                anticipatePin: 1,
                markers: true,
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
      <img src={assets.banner} alt="" className="clientBanner" />
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
                <div className="client-info-item1">
                  <h1>{client.name}</h1>
                  <p>{client.type}</p>
                </div>
                <div className="client-info-item2">
                  <p>{client.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;

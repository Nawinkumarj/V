import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsapSetup";

const ScrollPage = () => {
  const itemsRef = useRef([]);
  const chromaEntryRef = useRef(null);
  const chromaExitRef = useRef(null);
  const dimmerScrubRef = useRef(null);
  const scrollerScrubRef = useRef(null);
  const weCanHeaderRef = useRef(null);

  useEffect(() => {
    const docEl = document.documentElement;

    // Set initial CSS vars
    const startHue = gsap.utils.random(0, 100, 1);
    const endHue = gsap.utils.random(900, 1000, 1);
    docEl.dataset.theme = "dark";
    docEl.dataset.syncScrollbar = true;
    docEl.dataset.animate = true;
    docEl.dataset.snap = false;
    docEl.dataset.debug = false;
    docEl.style.setProperty("--start", startHue);
    docEl.style.setProperty("--hue", startHue);
    docEl.style.setProperty("--end", endHue);

    itemsRef.current = gsap.utils.toArray("ul li");

    // Dimmer animation
    const dimmer = gsap
      .timeline()
      .to(itemsRef.current.slice(1), { opacity: 1, stagger: 0.5 })
      .to(
        itemsRef.current.slice(0, itemsRef.current.length - 1),
        { opacity: 0.2, stagger: 0.5 },
        0
      );

    dimmerScrubRef.current = ScrollTrigger.create({
      trigger: itemsRef.current[0],
      endTrigger: itemsRef.current[itemsRef.current.length - 1],
      start: "center center",
      end: "center center",
      animation: dimmer,
      scrub: 0.2,
    });

    // Hue shift
    const scroller = gsap.timeline().fromTo(
      docEl,
      {
        "--hue": startHue,
      },
      {
        "--hue": endHue,
        ease: "none",
      }
    );

    scrollerScrubRef.current = ScrollTrigger.create({
      trigger: itemsRef.current[0],
      endTrigger: itemsRef.current[itemsRef.current.length - 1],
      start: "center center",
      end: "center center",
      animation: scroller,
      scrub: 0.2,
      scroller: ".scroll-wrapper",
    });

    // Chroma entry/exit
    chromaEntryRef.current = gsap.fromTo(
      docEl,
      { "--chroma": 0 },
      {
        "--chroma": 0.3,
        ease: "none",
        scrollTrigger: {
          scrub: 0.2,
          trigger: itemsRef.current[0],
          start: "center center+=40",
          end: "center center",
        },
      }
    );

    chromaExitRef.current = gsap.fromTo(
      docEl,
      { "--chroma": 0.3 },
      {
        "--chroma": 0,
        ease: "none",
        scrollTrigger: {
          scrub: 0.2,
          trigger: itemsRef.current[itemsRef.current.length - 2],
          start: "center center",
          end: "center center-=40",
        },
      }
    );

    // "We can" transition effect
    const weCan = weCanHeaderRef.current;
    const weCanReplace = document.querySelector(".wecan-replace");

    gsap.set(weCanReplace, { opacity: 0, y: 20 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: weCanReplace,
          start: "top center",
          end: "top center+=50",
          scrub: 0.3,
        },
      })
      .to(weCan, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        weCanReplace,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const listItems = [
    "design.",
    "prototype.",
    "solve.",
    "build.",
    "develop.",
    "debug.",
    "prompt.",
    "collaborate.",
    "create.",
    "innovate.",
    "test.",
    "optimize.",
    "scale.",
    "do it.",
  ];

  return (
    <div className="scrollpage-container">
      <header className="scrollpage-header">
        <h1 className="scrollpage-fluid">
          What{" "} 
          <span className="wecan-static" ref={weCanHeaderRef}>
            We can
          </span>
          <br />
          <span>Do.</span>
        </h1>
      </header>

      <main className="scrollpage-main">
        <section className="scrollpage-content scrollpage-fluid">
          <h2>
            <span className="wecan-replace" aria-hidden="true">
              We can&nbsp;
            </span>
            <span className="scroll-page-sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true" style={{ "--count": listItems.length }}>
            {listItems.map((text, i) => (
              <li key={i} style={{ "--i": i }}>
                {text}
              </li>
            ))}
          </ul>
        </section>

        <section
          style={{ height: "10vh", pointerEvents: "none", opacity: 0 }}
        />
      </main>
    </div>
  );
};

export default ScrollPage;

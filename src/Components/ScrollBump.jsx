import React, { useEffect } from "react";

export default function ScrollBump() {
  useEffect(() => {
    const bump = document.getElementById("scroll-bump");
    const progressLine = document.getElementById("progress-line");
    const backText = document.getElementById("back-to-top-text");
    if (!bump || !progressLine || !backText) return;

    const totalLen = 600;
    progressLine.style.strokeDasharray = totalLen;
    progressLine.style.strokeDashoffset = totalLen;

    let animStarted = false;
    let animDone = false;
    let scrollSent = false;

    const animCurve = () => {
      const dur = 2000;
      let start = null;
      requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        const t = Math.min((ts - start) / dur, 1);
        progressLine.style.strokeDashoffset = totalLen * (1 - t);
        if (t < 1) requestAnimationFrame(step);
        else animDone = true;
      });
    };

    const smoothUp = () => {
      const startY = window.scrollY;
      const dur = 1500;
      let start = null;
      requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        const t = Math.min((ts - start) / dur, 1);
        const y = startY * (1 - (1 - t) ** 3);
        window.scrollTo(0, y);
        if (t < 1) requestAnimationFrame(step);
      });
    };

    const scrollHandler = () => {
      const top = bump.getBoundingClientRect().top;
      if (top < window.innerHeight && !animStarted) {
        bump.classList.add("visible");
        animStarted = true;
        animCurve();
      }
      if (top > window.innerHeight && animStarted) {
        bump.classList.remove("visible");
        animStarted = false;
        animDone = false;
        scrollSent = false;
        progressLine.style.strokeDashoffset = totalLen;
      }
      if (
        animDone &&
        backText.getBoundingClientRect().top < window.innerHeight - 10 &&
        !scrollSent
      ) {
        scrollSent = true;
        smoothUp();
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div id="scroll-bump" className="scroll-bump">
      <svg viewBox="0 0 300 150" className="progress-curve">
        <path
          d="M0,150 Q150,0 300,150"
          stroke="#444"
          strokeWidth="4"
          fill="none"
        />
        <path
          id="progress-line"
          d="M0,150 Q150,0 300,150"
          stroke="#0ff"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <div id="back-to-top-text" className="back-to-top-text">
        Back to Top
      </div>
    </div>
  );
}

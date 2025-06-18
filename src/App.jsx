import React, { useEffect, useRef } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import CustomCursor from "./Components/InteractiveCursor";
import { assets } from "./assets/assets";
import EnquireButton from "./Components/EnquireButton";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const footerRef = useRef(null); 

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);
    setTimeout(refresh, 500); // Fonts/images might shift things

    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
    };
  }, []);
  
  

  useEffect(() => {
    const bump = document.getElementById("scroll-bump");
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    const handleScroll = () => {
      if (!bump || !footerRef.current || !scrollWrapper) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const wrapperRect = scrollWrapper.getBoundingClientRect();
      const footerTop = footerRect.top - wrapperRect.top;
      const footerHeight = footerRect.height;

      // Show bump if any part of footer is visible in the scroll-wrapper
      if (
        footerTop < scrollWrapper.clientHeight &&
        footerTop + footerHeight > 0
      ) {
        bump.classList.add("visible");
      } else {
        bump.classList.remove("visible");
      }
    };

    const handleClick = () => {
      scrollWrapper?.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollWrapper?.addEventListener("scroll", handleScroll);
    bump?.addEventListener("click", handleClick);

    handleScroll(); // Initial check

    return () => {
      scrollWrapper?.removeEventListener("scroll", handleScroll);
      bump?.removeEventListener("click", handleClick);
    };
  }, []);
  



  return (
    <div className="scroll-wrapper">
      <div className="app-main">
        <ScrollToTop />
      <CustomCursor cursorImage={assets.cursor} />
      <EnquireButton/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Routes>

      {/* ✅ Pass the ref to Footer */}
      <Footer ref={footerRef} />

      {/* Scroll Bump */}
      <div id="scroll-bump" className="scroll-bump">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 690 60"
          preserveAspectRatio="none"
        >
          <path
            className="bulge"
            fill="#8750f7"
            d="M0,55 C107.57331,55 172.397965,0 261.914001,0 
             C351.430038,0 418.082695,55 524.041347,55 
             C630,55 -108,55 0,55 Z"
          />
        </svg>
        <p className="label">Back to top</p>
        </div>
        </div>
  </div>
  );
}

export default App;

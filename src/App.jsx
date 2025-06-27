import React, {  useRef } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import CustomCursor from "./Components/InteractiveCursor";
import { assets } from "./assets/assets";
import EnquireButton from "./Components/EnquireButton";
// import ScrollToTop from "./Components/ScrollToTop";
import ScrollBump from "./Components/ScrollBump";
import PolicyPage from "./Pages/PrivacyPolicy";
import { Analytics } from "@vercel/analytics/react"
import ClientPortal from "./Pages/ClientPortal";
import TermsConditions from "./Pages/TermsConditions";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  const footerRef = useRef(null); 

  // useEffect(() => {
  //   const refresh = () => ScrollTrigger.refresh();
  //   window.addEventListener("resize", refresh);
  //   window.addEventListener("load", refresh);
  //   setTimeout(refresh, 500); // Fonts/images might shift things

  //   return () => {
  //     window.removeEventListener("resize", refresh);
  //     window.removeEventListener("load", refresh);
  //   };
  // }, []);
  
  




  return (
    // <div className="scroll-wrapper">
    <div className="app-main">
      {/* <ScrollToTop /> */}
      <SmoothScroll />
      <Analytics />
      <CustomCursor cursorImage={assets.cursor} />
      <EnquireButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cp" element={<ClientPortal />} />
        <Route path="/services" element={<Service />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
      </Routes>

      {/* ✅ Pass the ref to Footer */}
      <Footer ref={footerRef} />

      {/* Scroll Bump */}
      <ScrollBump footerRef={footerRef} />
    </div>
    // </div>
  );
}

export default App;

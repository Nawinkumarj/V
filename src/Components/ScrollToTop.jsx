// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { gsap, ScrollTrigger } from "../Components/gsapSetup";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Cleanup old animations and triggers BEFORE setting new ones
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       gsap.globalTimeline.clear(); // clear any leftover animations
//     };
//   }, [pathname]);

//   useEffect(() => {
//     const delayHandle = setTimeout(() => {
//       window.scrollTo({ top: 0 });

//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 100);
//     }, 100);

//     return () => clearTimeout(delayHandle);
//   }, [pathname]);

//   return null;
// }

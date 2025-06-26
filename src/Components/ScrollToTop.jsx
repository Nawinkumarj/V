import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "../Components/gsapSetup";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kill existing ScrollTriggers before scrolling
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Scroll the window to the top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Ensure it reaches exact 0 after animation ends
    const handle = setTimeout(() => {
      window.scrollTo({ top: 0 });
      ScrollTrigger.refresh();
    }, 700);

    return () => clearTimeout(handle);
  }, [pathname]);

  return null;
}

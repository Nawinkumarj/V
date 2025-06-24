import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "../Components/gsapSetup";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    if (!scrollWrapper) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    scrollWrapper.scrollTo({ top: 0, behavior: "smooth" });

    const handle = setTimeout(() => {
      scrollWrapper.scrollTop = 0;

      ScrollTrigger.refresh();
    }, 700);

    return () => clearTimeout(handle);
  }, [pathname]);

  return null;
}

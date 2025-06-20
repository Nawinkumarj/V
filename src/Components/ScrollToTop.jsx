import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      const scrollWrapper = document.querySelector(".scroll-wrapper");
      if (scrollWrapper) {
        scrollWrapper.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [pathname]);

    return null;
}
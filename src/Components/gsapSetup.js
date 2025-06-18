import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    if (scrollWrapper) {
      // ✅ Setup scrollerProxy for custom scroll container
      ScrollTrigger.scrollerProxy(scrollWrapper, {
        scrollTop(value) {
          return arguments.length
            ? (scrollWrapper.scrollTop = value)
            : scrollWrapper.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "fixed", // ✅ Force 'fixed' pinning to prevent Safari jitter
      });

      // ✅ Normalize scrolling behavior for smoother experience on Mac
      ScrollTrigger.normalizeScroll({
        target: scrollWrapper,
        allowNestedScroll: true,
        type: "touch,wheel,pointer",
      });

      // ✅ Set default scroller
      ScrollTrigger.defaults({ scroller: scrollWrapper });

      // ✅ Force refresh to avoid layout shift or jitter
      ScrollTrigger.addEventListener("refresh", () => {
        scrollWrapper.style.overflow = "hidden";
        requestAnimationFrame(() => {
          scrollWrapper.style.overflow = "auto";
        });
      });

      // ✅ Ensure GSAP updates on scroll (important for Safari)
      scrollWrapper.addEventListener("scroll", ScrollTrigger.update);
      scrollWrapper.addEventListener("touchmove", ScrollTrigger.update);

      // ✅ Optional: keep requestAnimationFrame alive for Safari refresh
      const rafFix = () => requestAnimationFrame(rafFix);
      rafFix();

      ScrollTrigger.refresh();
    }
  });
}

export { gsap, ScrollTrigger };
